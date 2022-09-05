import React from 'react'
import './Sidebar.css'
import Cart from '../../albums/cart-outline.jpg'

export const Sidebar = () => {
    return (
        <>
            <div className='cart'>
                <img src={Cart} alt='Display of cart' className="cartImage"></img>
                <p>Items: {}</p>
            </div>
        </>
    )
}