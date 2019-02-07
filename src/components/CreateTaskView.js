import React from 'react'
import CreateTaskForm from './CreateTaskForm'
import { Link } from 'react-router-dom'

const CreateTask = ({isFetching, successMessage, status, createTask}) => (
  <div>
    <Link to="/">Back</Link>
    {isFetching ? <h2> loading ... </h2> : null}
      <CreateTaskForm onSubmit={(task)=>createTask(task)} />
    {successMessage ? <h4> Response status: {status} </h4> : null}
  </div>
)

export default CreateTask
