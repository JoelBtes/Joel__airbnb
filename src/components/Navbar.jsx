import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <img src={`${process.env.PUBLIC_URL}/images/airbnb 1.png`} alt="airbnb-logo" className='nav__logo'/>
    </nav>
  )
}

export default Navbar