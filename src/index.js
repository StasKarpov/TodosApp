import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import tasks from './reducers'
import { fetchTasks } from './actions'
import TasksList from './containers/TasksList'
import CreateTask from './containers/CreateTask'
import Login from './containers/Login'
import { createStore, applyMiddleware, combineReducers  } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'


const loggerMiddleware = createLogger()
const reducer = combineReducers({tasks,form:formReducer})
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, //for creating requests to backend
    loggerMiddleware //for debugging
  ))

store.dispatch(fetchTasks())//get initial tasks from server


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
          <Route exact path="/" component={TasksList} />
          <Route path="/create" component={CreateTask} />
          <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
