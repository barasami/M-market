import React, { useEffect, useState } from 'react'
import './Myproducts.css'
import Time from '../Timing/Time'
import { CoolData } from '../Data/Mydata'
import Paper from '@mui/material/Paper';


function Myproducts() {
  const[data,setData]=useState([])

  useEffect(()=>{
   setData(CoolData)
  },[])
  
  const Mymap=data.map((singles)=>{
    const{id,name,cost,image}=singles
    return(
      <Paper elevation={3} key={id} className='docs'>
        <img src={image} alt={name} className='img'/>
        {name}
        ${cost}
      </Paper>
    )
  })
 
  return (
    <>
      <div className='time'>
        <Time/>
      </div>
      <div className='products'>
        <div className='product'>
          {Mymap}
        </div>
      </div>
    </>
  )
}

export default Myproducts