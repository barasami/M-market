import React from 'react'
import './Cart'



function Cart() {
  let amount=0
  return (
    <div className='CartItem'>
      <div className='items'>
        <p className='item'>Cart {amount}</p>
      </div>
    </div>
  )
}

export default Cart