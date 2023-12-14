import React from 'react'
import  './Header.css'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
   <header>
    <div className='top'>
        <a href='/'>
            <img  className='logo' src={Logo} alt='logo'/>
        </a>
        <button className='btn-login'>LOGIN</button>
        <button className='btn-signup'>SIGNUP</button>
    </div>
   </header>
  )
}

export default Header