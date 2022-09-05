import React from 'react'
import './Card.css'
import { addToCart } from './AddToCart'

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
}