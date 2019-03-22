import React, { Component } from 'react'
import data from '../data/data.json'
const MyContext = React.createContext();

export const withContext = (Comp) => {
  return class WithContextConsumer extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {(value) => (
            <Comp
              activities={value.activities}
              addToCart={value.addToCart}
              removeFromCart={value.removeFromCart}
              addToFavourites={value.addToFavourites}
              removeToFavourites={value.removeToFavourites}
              favourites={value.favourites}
              cart={value.cart}
              sumCart={value.sumCart}
              {...this.props}
            />
          )}
        </MyContext.Consumer>
      )
    }
  }
}

class ActivityService extends Component {
  state = {
    activities: [],
    cart: [],
    sumCart: 0,
    favourites: 0,
  }

  componentDidMount() {
    this.setState({
      activities: data,
    })
  }

  addToCart = (id) => {
    const {activities, cart, sumCart} = this.state;
    const activityToCart = activities.find(item => item.uuid === id);
    const newTotal = sumCart + activityToCart.retail_price.value;
    this.setState({
      cart: [...cart, activityToCart],
      sumCart: newTotal
    })
  }

  removeFromCart = (id) => {
    const { activities, cart, sumCart } = this.state;
    const activityFromCart = activities.find(item => item.uuid === id);
    const indexActivity = cart.indexOf(activityFromCart);
    const newTotal = sumCart - activityFromCart.retail_price.value;
    cart.splice(indexActivity, 1);
    this.setState({
      cart,
      sumCart: newTotal
    })
  }

  addToFavourites = () => {
    let {favourites} = this.state;
    favourites++
    this.setState({
      favourites
    })
  }

  removeToFavourites = () => {
    let { favourites } = this.state;
    favourites--
    this.setState({
      favourites
    })
  }

  render() {
    return (
      <MyContext.Provider 
        value={{
          activities: this.state.activities,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          cart: this.state.cart,
          addToFavourites: this.addToFavourites,
          removeToFavourites: this.removeToFavourites,
          favourites: this.state.favourites,
          sumCart: this.state.sumCart,
        }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default ActivityService;