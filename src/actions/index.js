import fetch from 'cross-fetch'
import 'babel-polyfill'
//import axios from 'axios'
import md5 from 'js-md5'
import $ from 'jquery';

//TODO add error handeling

export const requestLogin = () => {
  return {
    type: "REQUEST_LOGIN"
  }
}

export const successLogin = () => {
  return {
    type: "SUCCESS_LOGIN"
  }
}

export const failedLogin = () => {
  return {
    type: "FAILED_LOGIN"
  }
}



export const handleLogin = (credentials) => {
  return dispatch => {
    dispatch(requestLogin())
    //TODO checking credentials...

    if(credentials.username === "admin" && credentials.password === "123"){
      dispatch(successLogin())
    }
    else {
      dispatch(failedLogin())
    }
  }
}



export const requestCreateTask = () => {
  return {
    type: "REQUEST_CREATE_TASK"
  }
}

export const recieveCreateTask = (json) => {
  return {
    type: "RECEIVE_CREATE_TASK",
    status: json.status ? json.status : 'error',
  }
}

export const createTask = (task) => {
  return dispatch => {
  dispatch(requestCreateTask())
  var form = new FormData();
  form.append("username", task.username);
  form.append("email", task.email);
  form.append("text", task.text);

  var settings = {
    'url': 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Stas',
    'crossDomain': true,
    'method': 'POST',
    'mimeType': "multipart/form-data",
    'contentType': false,
    'processData': false,
    'data': form,
    'dataType': "json",
  }

  $.ajax(settings).done(json => { console.log(json);dispatch(recieveCreateTask(json))});
 }
}



export const requestTasks = () => {
  return {
    type: "REQUEST_TASKS",
  }
}

export const receiveTasks = (json,page,sortBy,order) => {
  return {
    type: "RECEIVE_TASKS",
    json,page,sortBy,order
  }
}


export const fetchTasks = (page=1,sortBy='id',order='asc') => {
  return dispatch => {
   dispatch(requestTasks())
   return fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Stas&page='
                + page + '&sort_field=' + sortBy + '&sort_direction=' + order)
     .then(response => response.json())
     .then(json => {dispatch(receiveTasks(json,page,sortBy,order))})
 }
}

export const requestUpdate = () => {
  return {
    type: "REQUEST_UPDATE",
  }
}

export const receiveUpdate = () => {
  return {
    type: "RECEIVE_UPDATE",
  }
}


export const updateTask = (task,page,sortBy,order) => {
  return dispatch => {
   dispatch(requestUpdate())
   var data = {token:'beejee'}
   var id = undefined
   //parse data from edit task form output
   Object.keys(task).forEach((key)=>{
    if(key.includes('text')) {
      Object.assign(data,{text:task[key]})
      id = key.substring(4,key.length)
    }
    if(key.includes('checkbox')){
      Object.assign(data,{status:task[key]?10:0})
      id = key.substring(8,key.length)
    }
   })
   //create signature
   let url = data.status ? 'status=' + encodeURIComponent(data.status) + '&' : ''
       url+= data.text ? 'text=' + encodeURIComponent(data.text) + '&' : ''
       url+= 'token=' + encodeURIComponent(data.token)
   data.signature = md5(url)

   //convert to form data
   var form = new FormData();
   for ( var key in data ) {
      form.append(key, data[key]);
   }

   var settings = {
     'url': 'https://uxcandy.com/~shapoval/test-task-backend/edit/'+id+'?developer=Stas',
     'crossDomain': true,
     'method': 'POST',
     'mimeType': "multipart/form-data",
     'contentType': false,
     'processData': false,
     'data': form,
     'dataType': "json",
   }
   $.ajax(settings).done(json => {
     dispatch(receiveUpdate());
     dispatch(fetchTasks(page,sortBy,order))
   })
 }
}
