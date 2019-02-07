import React from 'react'
import CreateTaskForm from './CreateTaskForm'

const CreateTask = ({isFetching, successMessage, status, createTask}) => (
  <div>
    <a href='/'>Back</a>
    {isFetching ? <h2> loading ... </h2> : null}
      <CreateTaskForm onSubmit={(task)=>createTask(task)} />
    {successMessage ? <h4> Response status: {status} </h4> : null}
  </div>
)

export default CreateTask
