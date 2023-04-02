import React from 'react'
import './Login.css'
import Paper from '@mui/material/Paper';

function Login() {
  return (
    <div className='login'>
      <form className='form'>
       <Paper elevation={2} className='loginpaper'>
          <div className='market'>
            <p className='mytitle'>M-MARKET</p>
          </div>
          <div className='username'>
            <input type='text' placeholder='Username' className='user'/>
          </div>
          <div className='password'>
            <input type='password' placeholder='Password' className='psw'/>
          </div>
          <div className='buttons'>
            <button className='btn'>Login</button>
            <button className='btn'>Register</button>
          </div>
          <div className='psswdreset'>
            <p>Forgot password?</p>
          </div>
       </Paper>
      </form>
    </div>
  )
}

export default Login