import React from 'react'
import Task from './Task'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'

const TasksList =
({isFetching, tasks, page, maxPage, fetchTasks, isAuthentificated, updateTask, sortBy, order}) => (
  <div>
    <Link to="/create">CreateTask</Link>
    <br/>
    {isAuthentificated ?
      <h5>You are authentificated as admin</h5>
      :
      <Link to="/login">Login</Link>

    }
    <ul>
      {isFetching ? <h2> loading ... </h2> : null}

      {tasks.map(task =>
        <Task
          key={task.id}
          isAuthentificated={isAuthentificated}
          onSubmit={(values)=>updateTask(values,page,sortBy,order)}
          {...task}
        />
      )}
     </ul>
     <Pagination
        currentPage={page}
        maxPage={maxPage}
        fetchTasks={fetchTasks}
        sortBy={sortBy}
        order={order}/>
   </div>

)

export default TasksList
