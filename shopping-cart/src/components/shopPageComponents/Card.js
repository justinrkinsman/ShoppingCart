import React from 'react'
import './Card.css'
import { addToCart } from './AddToCart'

export function Card(props) {
    return(
        <div>
            <img src={props.source} alt={props.title}></img>
            <h3>{props.band}</h3>
            <p>{props.title}</p>
            <div>
                <input type='number' defaultValue='0' min='0' max='10' id={`items${props.index}`}></input>
            </div>
            <button id={`addToCart${props.index}`} onClick={addToCart}>Add to Cart</button>
        </div>
    )
}