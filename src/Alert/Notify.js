import React from 'react'
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { notifyActions } from '../Store/Notify_slice';

function Notify({type,message}) {
  const dispatch=useDispatch()
  const mynotice=useSelector(state=>state.notice.notification)
  const handleclose=()=>{
    dispatch(notifyActions.showNotification({
      open:false
    }))
  }
  return (
    <div>
      {mynotice.open && <Alert onClose={handleclose} severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notify