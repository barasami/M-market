import React from 'react'
import'./Footer.css'


function Footer() {
    const mydate=new Date().getFullYear()
    
  return (
    <footer className='footer'>
        <p className='paragraph'>&copy;E-market{mydate},All rights reserved</p>
    </footer>
  )
}

export default Footer