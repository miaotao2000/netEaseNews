import React from 'react'
import LoginForm from './form'
import './login.styl'

export default class Login extends React.Component {
  render () {
    return (
      <div id="login">
        <LoginForm></LoginForm>
      </div>
    )
  }
}