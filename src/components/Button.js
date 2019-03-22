import React, { Component } from 'react'

const Button = (props) => {
    return (
      <button onClick={props.addToCart}>{props.isAdded ? 'In cart' : 'Add to cart'}</button>
    )
}

export default Button;