import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../Store/Cart_slice'



function Cart() {
  const amount=useSelector(state=>state.cart.Totalquantity)
  const dispatch=useDispatch()

  const showcart=()=>{
    dispatch(cartActions.setshowCart())
  }
  return (
    <div className='CartItem'>
      <div className='items'>
        <p className='item'>Cart : {amount} items</p>
        <button onClick={showcart} className='button'>Show Items</button>
      </div>
    </div>
  )
}

export default Cart