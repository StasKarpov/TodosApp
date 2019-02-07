import React from 'react'
import { Field, reduxForm } from 'redux-form';


const Task = (props) =>{
  const {id,username,email,text,status,isAuthentificated, handleSubmit}  = props

  return(
    <li>
    <h4>#{id}:{username}, {email}</h4>
    <div>
      <h5>{text}</h5>
      <h6>Status: {status === 0 ? 'undone' : 'done'}</h6>
    </div>

    {isAuthentificated ? //admin view
      <form onSubmit={handleSubmit}>
        <div>
          <Field name={'text'+id}
            component='input'
            type="text" placeholder="Enter new text"/>
          {status === 0 ?
            <div>
              <label>Mark as done</label>
              <Field name={'checkbox'+id}
                component="input" type="checkbox"
              />
            </div>
          :null}
          <button type='submit'>Submit changes</button>
        </div>
      </form>
    :null}
    </li>
  )
}

export default reduxForm({
  form: Math.random().toString(36).substring(7) // a unique name for this form
})(Task);
