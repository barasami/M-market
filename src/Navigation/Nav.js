import React, { useState } from 'react'
import './Nav.css'
import ClearIcon from '@mui/icons-material/Clear';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Login from '../Loginpage/Login';

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
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav