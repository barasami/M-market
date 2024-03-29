import React, { useState } from 'react'
import './Nav.css'
import ClearIcon from '@mui/icons-material/Clear';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/Auth_slice';



function Nav() {
    const dispatch=useDispatch();
    const[menu,setMenu]=useState(false)
    const changeMe=()=>{
        setMenu(!menu)
    }
    const logoutHandler=()=>{
        dispatch(authActions.logout())
    }
    
  return (
    <nav className='navbar'>
        <div className='title'>M-market</div>
        <div className='mymenu' onClick={changeMe}>
            {menu ? <DehazeIcon className='icon'/>: <ClearIcon className='icon'/>  }
        </div>
        <div className={menu ? 'Dontshow' : 'show'}>
            <ul>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/logout' onClick={logoutHandler}>Logout</Link></li>
            </ul>
        </div>
    </nav>
  )
}


export default Nav