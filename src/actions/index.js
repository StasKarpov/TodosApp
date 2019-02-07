import fetch from 'cross-fetch'
import 'babel-polyfill'
import axios from 'axios'
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
    status: json.data.status,
  }
}

export const createTask = (task) => {
  console.log('task is');
  console.log(task);
  return dispatch => {
  dispatch(requestCreateTask())

  return axios.post('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Stas',{
      username: task.username,
      email: task.email,
      text: task.text
  }).then(json => { console.log(json);dispatch(recieveCreateTask(json))})
 }
}



export const requestTasks = (page) => {
  return {
    type: "REQUEST_TASKS",
    page
  }
}

export const receiveTasks = (json,page) => {
  return {
    type: "RECEIVE_TASKS",
    json: json,
    page
  }
}


export const fetchTasks = (page=1,sortBy='id',order='asc') => {
  return dispatch => {
   dispatch(requestTasks(page))
   return fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Stas&page='
                + page + '&sort_field=' + sortBy + '&sort_direction=' + order)
     .then(response => response.json())
     .then(json => {dispatch(receiveTasks(json,page))})
 }
}

export const requestUpdate = () => {
  return {
    type: "REQUEST_UPDATE",
  }
}

export const receiveUpdate = (json) => {
  return {
    type: "RECEIVE_UPDATE",
    json
  }
}


export const updateTask = (task) => {
  return dispatch => {
   dispatch(requestUpdate(task))
   //call update
   dispatch(receiveUpdate())
 }
}
