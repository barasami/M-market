import React, { useEffect, useState } from 'react'
import './Myproducts.css'
import Time from '../Timing/Time'
import { CoolData } from '../Data/Mydata'
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector} from 'react-redux';
import { cartActions } from '../Store/Cart_slice';
import Cart from '../Cart/Cart';
import CircularProgress from '@mui/material/CircularProgress';
import Cartitm from '../CartItem/Cartitm';



function Myproducts() {
  const dispatch=useDispatch();
  const[data,setData]=useState([])
  const[loading,setloading]=useState(false)
  

  useEffect(()=>{
    setloading(true)
    setData(CoolData)
    setloading(false)
  },[])

  let total=0
  const myitems=useSelector(state=>state.cart.list)
  myitems?.map((item)=>{
    return total += item.totalCost;
  })

  console.log(myitems);
  
  const Mymap=data.map((singles)=>{
    const{id,name,cost,image}=singles
    const addTocart=()=>{
      dispatch(cartActions.addtoCart({
        name,
        id,
        cost,
      }))
    }
    
    return(
      <Grid item  lg={3} sm={6} xs={12}  key={id}  className='docs'>
        <Paper elevation={3} className='pep'>
          <Typography mt={1} className='imges'>
            <img src={image} alt={name} className='img'/>
          </Typography>
          <div className='head'>
            {name}
          </div>
          <div className='cost'>
            ${cost}
          </div>
          <div className='btn'>
            <button className='mybtn' onClick={addTocart} >Add To Cart</button>
          </div>
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
          {loading ? <CircularProgress color='#2c387e' className='circular'/> :
          <Grid container spacing={1}>
           {Mymap}
          </Grid>
          }
        </Container>
      </div>
      <div className='mycart'>
        <Cart/>
      </div>
      <div className='mycartitems'>
        <Cartitm/>
      </div>
      <div className='mycartTotal'>
        <p className='tPrice'>Total: ${total}</p>
      </div>
      
    </>
  )
}

export default Myproducts