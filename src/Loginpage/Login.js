import React from 'react'
import './Login.css'
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/Auth_slice';

function Login() {
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventdefault()
    dispatch(authActions.login())
  }
  return (
    <div className='login'>
      <form className='form'onSubmit={handleSubmit}>
       <Paper elevation={2} className='loginpaper'>
          <div className='market'>
            <p className='mytitle'>M-MARKET</p>
          </div>
          <div className='username'>
            <input type='text' placeholder='Username' className='user' required/>
          </div>
          <div className='password'>
            <input type='password' placeholder='Password' className='psw' required/>
          </div>
          <div className='buttons'>
            <button className='btns'>Login</button>
            <button className='btns'>Register</button>
          </div>
          <div className='psswdreset'>
            <p className='preset'>Forgot password?</p>
          </div>
       </Paper>
      </form>
    </div>
  )
}

export default Login