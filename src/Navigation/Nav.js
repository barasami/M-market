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
                <li><a href='#'><Link to='/products'>Products</Link></a></li>
                <li><a href='#'><Link to='/contact'>Contact</Link></a></li>
                <li><a href='#'><Link to='/'>Login</Link></a></li>
                <li><a href='#'></a><Link to='/cart'><ShoppingCartIcon className='cart'/></Link></li>
            </ul>
        </div>
    </nav>
  )
}


export default Nav