import React from 'react'
import './Sidebar.css'
import Cart from '../../albums/cart-outline.jpg'

export const Sidebar = (props) => {
    return (
        <>
            <div className='cart'>
                <img src={Cart} alt='Display of cart' className="cartImage"></img>
                <p id="cartQuantity">0</p>
            </div>
        </>
    )
}