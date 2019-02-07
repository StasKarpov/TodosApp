import React from 'react'
import TaskForm from './TaskForm'

const CreateTask = ({isFetching, successMessage, status, createTask}) => (
  <div>
  {isFetching ? <h2> loading ... </h2> : null}
    <TaskForm onSubmit={(task)=>createTask(task)} />
  {successMessage ? <h4> Response status: {status} </h4> : null}
  </div>
)

export default CreateTask
