import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Product from '../Components/Product'
import mockProducts from '../mockdata.json'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  subTotal = () => {
    let total = 0
    for (let i = 0; i < mockProducts.length; i++) {
      total += (mockProducts[i].quantity * mockProducts[i].unitPrice)
    }
    return total
  }

  // To get the 'Your Cart / Quantity / Price' header to properly align, I think it would have been better to use CSS Grid for alignment.
  // The way I've architected the components and used flexbox made aligning titles and items trickier than it needed to be.

  render () {
    return (
      <div className='cart-wrapper'>
        <h2>Your Cart</h2>
        <Product />
        <p className='subtotal'>SUBTOTAL: ${this.subTotal()}</p>
        <Link to='/shipping'>
          <button className='right'>CHECK OUT</button>
        </Link>
      </div>
    )
  }
}

export default Cart
