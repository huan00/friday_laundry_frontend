import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import '../styles/Login.css'

const Register = () => {
  const navigate = useNavigate()
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    full_name: '',
    billing_address: '',
    default_shipping_address: '',
    country: '',
    phone: ''
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayError, setDisplayError] = useState('none')

  const handleChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (signUpForm.password === confirmPassword) {
      setDisplayError('none')
      await RegisterUser(signUpForm)
      setSignUpForm({
        email: '',
        password: '',
        full_name: '',
        billing_address: '',
        default_shipping_address: '',
        country: '',
        phone: ''
      })
      setConfirmPassword('')
      navigate('/login')
    } else {
      setDisplayError('block')
    }
  }

  return (
    <div className="signup">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <label
          htmlFor="password"
          style={{ display: displayError, color: 'red' }}
        >
          Passwords does not match
        </label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        <input
          required
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <input
          required
          type="text"
          onChange={handleChange}
          name="full_name"
          placeholder="Full Name"
        />
        <input
          required
          type="text"
          onChange={handleChange}
          name="billing_address"
          placeholder="Billing address"
        />
        <input
          required
          type="text"
          onChange={handleChange}
          name="default_shipping_address"
          placeholder="Default shipping address"
        />
        <input
          required
          type="text"
          onChange={handleChange}
          name="country"
          placeholder="Country"
        />
        <input
          required
          type="tel"
          onChange={handleChange}
          name="phone"
          placeholder="Phone"
        />
        <button className="signUpBtn">Sign Up</button>
      </form>
    </div>
  )
}

export default Register
