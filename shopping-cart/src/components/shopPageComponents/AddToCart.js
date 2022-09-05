import React from 'react'

let cart = 0

export function addToCart() {
    let cartTotal = ++cart
    console.log(cartTotal)
}