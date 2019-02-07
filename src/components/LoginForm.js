import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props
  console.log(handleSubmit);
    return(
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" placeholder="admin" equired/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" placeholder="123" required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

// Decorate the form component
export default reduxForm({
  form: 'task' // a unique name for this form
})(LoginForm);
