import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <>
    <nav>
        <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
        <div className="menuitems">
            <div className="menuitem">Home</div>
            <div className="menuitem">About</div>
            <div className="menuitem">Services</div>
            <div className="menuitem">Blog</div>
            <div className="menuitem">Contact</div>
        </div>
    </nav>
    </>
  )
}

export default Navbar