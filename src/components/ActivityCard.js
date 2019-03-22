import React, { Component } from 'react'
import ButtonCart, { ButtonFav } from './Button';

class ActivityCard extends Component {

  state = {
    isAdded: false,
    isFavourite: false
  }

  handleClick = (id) => {
    if(!this.state.isAdded) {
      this.setState({
        isAdded: true
      })

      this.props.addToCart(id);
    }
  }

  handleFavourite = () => {
    if(!this.state.isFavourite) {
      this.setState({
        isFavourite: true
      })

      this.props.addToFavourites();
    } else {
      this.setState({
        isFavourite: false
      })

      this.props.removeToFavourites();
    }
  }

  render() {
    console.log('activity card', this.props)
    const { title, description, cover_image_url, retail_price, uuid } = this.props.activity;
    return (
      <>
        <div className="image-container">
          <img src={cover_image_url} alt={title}/>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{retail_price.formatted_value}</span>
        <div>
          <ButtonCart isAdded={this.state.isAdded} addToCart={() => this.handleClick(uuid)}/>
          <ButtonFav isFavourite={this.state.isFavourite} addToFavourites={this.handleFavourite}/>
        </div>
      </>
    )
  }
}

export default ActivityCard;