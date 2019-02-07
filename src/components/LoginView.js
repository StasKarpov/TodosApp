import React from 'react'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Login = ({login,isAuthentificated,loginFailed}) => (
  <div>
    <Link to="/">Back</Link>
    <LoginForm onSubmit={(credentials)=>login(credentials)} />
    {loginFailed ? 'Login failed' : null}
    {isAuthentificated ? <Redirect to='/' /> : null}
  </div>
)

export default Login
