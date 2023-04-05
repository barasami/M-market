import React from 'react'
import { useSelector } from 'react-redux'
import './Cartitm.css'


function Cartitm() {
    const items=useSelector(state=>state.cart.list)
    const show=useSelector(state=>state.cart.showcart)
    let coolitems=items.map((item)=>{
        const{id,cost,quantity,name}=item
        return(
            <>
                {show && 
                    <table key={id} className='table'>
                        <tr>
                            <td className='bodyd'>{name}</td>
                            <td>{' '}</td>
                            <td className='bodyd'>{quantity}</td>
                            <td className='bodyd'>${cost}</td>
                            <td className='minus'> - </td>
                            <td className='add'> + </td>
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