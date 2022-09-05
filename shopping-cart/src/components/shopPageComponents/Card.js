import React from 'react'
import './Card.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop } from "../ShopPage"
import { render } from '@testing-library/react'

export function Card(props) {
    return(
        <div>
            <img src={props.source} alt={props.title}></img>
            <h3>{props.band}</h3>
            <p>{props.title}</p>
            <div className="quantity">
                <button>-</button>
                <input type='text'></input>
                <button>+</button>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
    function addToCart() {
        let cart = 0
        let cartTotal = cart++
        console.log(cartTotal)
    }
}