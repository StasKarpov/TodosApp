import React from 'react'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom';

const Login = ({login,isAuthentificated,loginFailed}) => (
  <div>
    <a href='/'>Back</a>
    <LoginForm onSubmit={(credentials)=>login(credentials)} />
    {loginFailed ? 'Login failed' : null}
    {isAuthentificated ? <Redirect to='/' /> : null}
  </div>
)

export default Login
