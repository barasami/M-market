import React from 'react'
import { useSelector } from 'react-redux'
import './Cartitm.css'
import { Paper } from '@mui/material'

function Cartitm() {
    const items=useSelector(state=>state.cart.list)
    let coolitems=items.map((item)=>{
        const{id,cost,quantity,name}=item
        return(
            <Paper key={id}>
               <table>
                    <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>${cost}</td>
                    </tr>
               </table>
            </Paper>
        )
    })
  return (
    <div>
        {coolitems}
    </div>
  )
}

export default Cartitm