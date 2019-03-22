import React, { Component } from 'react'

export const ButtonCart = (props) => {
    return (
      <button onClick={props.addToCart}>{props.isAdded ? 'In cart' : 'Add to cart'}</button>
    )
}

export const ButtonFav = (props) => {
  return (
    <button onClick={props.addToFavourites}>{props.isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}</button>
  )
}

export default ButtonCart;