import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TaskForm = (props) => {
  const { handleSubmit } = props
    return(
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" required/>
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <Field name="text" component="input" type="text" required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

// Decorate the form component
export default reduxForm({
  form: 'task' // a unique name for this form
})(TaskForm);
