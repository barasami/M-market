import React from 'react'
import Alert from '@mui/material/Alert';

function Notify({type,message}) {
  return (
    <div>
        <Alert severity={type}>{message}</Alert>
    </div>
  )
}

export default Notify