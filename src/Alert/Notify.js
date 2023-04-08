import React from 'react'
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

function Notify({type,message}) {
  const mynotice=useSelector(state=>state.notice.notification)
  return (
    <div>
      {mynotice && <Alert severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notify