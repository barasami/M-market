import React from 'react'
import './Cart'
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
        <p className='item' onClick={showcart}>Cart : {amount} items</p>
      </div>
    </div>
  )
}

export default Cart