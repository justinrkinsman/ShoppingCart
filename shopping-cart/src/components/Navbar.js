import React from 'react'
import './Navbar.css'

export function Navbar() {
    return (
    <div className='navbar'>
        <p>Bloodbath Records</p>
        <ul className='navbarLinks'>
            <li>Home</li>
            <li>Shop</li>
        </ul>
    </div>
    )
}