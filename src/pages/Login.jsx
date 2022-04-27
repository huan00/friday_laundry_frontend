import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
      <div>
        <div className="login-msg">
          <h1>Log In</h1>
          <p>
            Don't have an account? <Link to={'/signup'}>Sign Up</Link>
          </p>
        </div>
        <form className="loginForm">
          {/* <label htmlFor="email">Email </label> */}
          <input type="text" placeholder="E-mail" id="email" />
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" placeholder="Password" id="password" />
          {/* <link to={' '}> */}
          <p className="forgotPassword">forgot password?</p>
          {/* </link> */}
          <button className="loginBtn">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
