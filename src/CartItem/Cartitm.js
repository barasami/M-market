import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cartitm.css'
import { cartActions } from '../Store/Cart_slice'


function Cartitm() {
    const dispatch=useDispatch()
    const items=useSelector(state=>state.cart.list)
    const show=useSelector(state=>state.cart.showcart)

   
    let coolitems=items?.map((item)=>{
        const{id,cost,quantity,name,totalCost}=item
        const increment=()=>{
            dispatch(cartActions.addtoCart({
                name,
                id,
                cost,
                quantity,
                totalCost,

            }))

        }
        const decrement=()=>{
            dispatch(cartActions.removefromCart(id))
    
        }
        return(
            <>
                {show && 
                    <table key={id} className='table'>
                        <tr>
                            <td className='bodyd'>{name}</td>
                            <td>{' '}</td>
                            <td className='bodyd'>{quantity}</td>
                            <td className='bodyd'>${cost}</td>
                            <td className='total'>${totalCost}</td>
                            <td className='minus'> <button className='coolbtn' onClick={decrement}>-</button> </td>
                            <td className='add'><button className='coolbtn' onClick={increment}>+</button> </td>
                        </tr>
              
                    </table>
                }
            </>
        )
    })
  return (
    <div>
        {coolitems}
    </div>
  )
}

export default Cartitm