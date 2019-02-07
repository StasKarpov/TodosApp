import React from 'react'
import { Field, reduxForm } from 'redux-form';

const renderField = (props) => {
  console.log('hello');
  console.log(props);
  return(
    <input {...props.input} type={props.type} value={props.text} />
  )
}


const Task = (props) =>{
  const {id,username,email,text,status,isAuthentificated, handleUpdate}  = props

  return(
    <li>
    <h4>#{id}:{username}, {email}</h4>

    {isAuthentificated ? //admin view
      <form onSubmit={handleUpdate}>
        <div>
          <Field name={'text'+id}
            component={renderField} text={text}
            type="text" required/>
          <Field name={'checkbox'+id}
            component="input" type="checkbox"
            value={status === 0 ? false : true}
            required/>
          <button type='submit'>Submit changes</button>
        </div>
      </form>
    :
      <div>
        <h5>{text}</h5>
        <h6>Status: {status === 0 ? 'undone' : 'done'}</h6>
      </div>
    }
    </li>
  )
}

export default reduxForm({
  form: 'update ' // a unique name for this form
})(Task);
