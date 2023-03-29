import React, { useEffect, useState } from 'react'
import './Myproducts.css'
import Time from '../Timing/Time'
import { CoolData } from '../Data/Mydata'


function Myproducts() {
  const[data,setData]=useState([])

  useEffect(()=>{
   setData(CoolData)
  },[])
  
  const Mymap=data.map((singles)=>{
    const{id,name,from}=singles
    return(
      <div key={id} >
        <div>
          {name}
        </div>
        <div>
          {from}
        </div>
      </div>
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