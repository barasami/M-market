import React from 'react'
import './Cart'
import { useSelector } from 'react-redux'



function Cart() {
  const amount=useSelector(state=>state.cart.Totalquantity)
  return (
    <div className='CartItem'>
      <div className='items'>
        <p className='item'>Cart : {amount} items</p>
      </div>
    </div>
  )
}

export default Cart