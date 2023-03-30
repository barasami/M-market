import React, { useEffect, useState } from 'react'
import './Myproducts.css'
import Time from '../Timing/Time'
import { CoolData } from '../Data/Mydata'
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';



function Myproducts() {
  const[data,setData]=useState([])

  useEffect(()=>{
   setData(CoolData)
  },[])
  
  const Mymap=data.map((singles)=>{
    const{id,name,cost,image}=singles
    return(
      <Grid item  lg={3} sm={6} xs={12}  key={id}  className='docs'>
        <Paper elevation={3}>
          <Typography mt={2}>
            <img src={image} alt={name} className='img'/>
          </Typography>
          <Typography variant='h9' p={2} ml={1} color='seagreen'>
            {name}
          </Typography>
          <Typography variant='h10' color='blueviolet' p={2} ml={2}>
            ${cost}
          </Typography>
       </Paper>
      </Grid>
    )
  })
 
  return (
    <>
      <div className='time'>
        <Time/>
      </div>
      <div className='products'>
        <Container>
          <Grid container spacing={1}>
            {Mymap}
          </Grid>
        </Container>
      </div>
      
    </>
  )
}

export default Myproducts