import React, { useState } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, toggleAuthenticated }) => {
  const navigate = useNavigate()
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(signInData)
    setSignInData({
      email: '',
      password: ''
    })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <div className="login">
      <div>
        <div className="login-msg">
          <h1>Log In</h1>
          <p>
            Don't have an account? <Link to={'/signup'}>Sign Up</Link>
          </p>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email </label> */}
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            name="email"
            onChange={handleChange}
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleChange}
          />
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
