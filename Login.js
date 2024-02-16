import React, { useState } from 'react'
import axios from '../axios'
import { MutatingDots } from 'react-loader-spinner'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('/login', {
        email,
        password
      })

      if (response) {
        console.log(response.data.user.role)
        if (response.data.user.role) {
          if (response.data.user.role === 'admin') {
            localStorage.setItem('admin', response.data.access_token)
            setLoading(false)
            window.location.reload(false)
          } else {
            localStorage.setItem('access_token', response.data.access_token)
            setLoading(false)
            window.location.reload(false)
          }
        }
      }

      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div class='center'>
      {loading && (
          <>
            <div className='loader'>
              <div className='pop-overlay'></div>
              <MutatingDots
                height='100'
                width='100'
                color='#18206F'
                secondaryColor='#FBCBDC'
                radius='12.5'
                ariaLabel='mutating-dots-loading'
                wrapperStyle={{}}
                wrapperClass='mutating-dots-loading'
                visible={true}
              />
            </div>
          </>
        )}
        <input type='checkbox' id='show' />
        <label for='show' class='show-btn'>
          Ready to Go for Vaccination
        </label>
        <div class='container'>
          <label
            for='show'
            class='close-btn fas fa-times'
            title='close'
          ></label>
          <div class='text'>Login Form</div>
          <form action='#' onSubmit={handleLogin}>
            <div class='data'>
              <label>Email or Phone</label>
              <input
                type='text'
                value={email}
                onChange={e => setemail(e.target.value)}
                required
              />
            </div>
            <div class='data'>
              <label>Password</label>
              <input
                value={password}
                onChange={e => setpassword(e.target.value)}
                type='password'
                required
              />
            </div>
            <div class='forgot-pass'>
              <a href='#'>Forgot Password?</a>
            </div>
            <div class='btn'>
              <div class='inner'></div>
              <button type='submit'>
                <span class='btnText'>
                  <a href='/'>Login</a>
                </span>
              </button>
            </div>
            <div class='signup-link'>
              Not a member? <a href='registration.html'>Register </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
