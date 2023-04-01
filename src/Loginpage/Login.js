import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';

function Login() {
  return (
    <div className='login'>
      <form className='form'>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
      </form>
    </div>
  )
}

export default Login