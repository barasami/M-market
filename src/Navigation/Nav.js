import React, { useState } from 'react'
import './Nav.css'
import ClearIcon from '@mui/icons-material/Clear';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Nav() {
    const[menu,setMenu]=useState(false)
    const changeMe=()=>{
        setMenu(!menu)
    }
    
  return (
    <nav className='navbar'>
        <div className='title'>M-market</div>
        <div className='mymenu' onClick={changeMe}>
            {menu ? <DehazeIcon className='icon'/>: <ClearIcon className='icon'/>  }
        </div>
        <div className={menu ? 'Dontshow' : 'show'}>
            <ul>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/cart'><ShoppingCartIcon className='cart'/></Link></li>
            </ul>
        </div>
    </nav>
  )
}


export default Nav