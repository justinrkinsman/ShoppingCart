import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
    <div className='navbar'>
        <p>Bloodbath Records</p>
        <ul className='navbarLinks'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
        </ul>
    </div>
    )
}