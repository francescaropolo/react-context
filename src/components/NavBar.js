import React, { Component } from 'react'
import { withContext } from '../services/ActivityService';

const NavBar = (props) => {
  console.log(props)
  return (
    <nav>
      <h1>BRAND</h1>
      <ul>
        <li>{props.sumCart === 0 ? 'Cart Empty' : `${props.sumCart}$ Cart: ${props.cart.length}`}</li>
        <li>Favourite: {props.favourites}</li>
      </ul>
    </nav>
  )
}

export default withContext(NavBar);