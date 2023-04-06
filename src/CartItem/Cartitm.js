import React from 'react'
import { useSelector } from 'react-redux'
import './Cartitm.css'


function Cartitm() {
    const items=useSelector(state=>state.cart.list)
    const show=useSelector(state=>state.cart.showcart)

    const increment=()=>{

    }
    const decrement=()=>{

    }
    let coolitems=items.map((item)=>{
        const{id,cost,quantity,name,totalCost}=item
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