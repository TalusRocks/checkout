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

  render () {
    return (
      <div className='cart-wrapper'>
        <h2 className='cart-header'>Your Cart</h2>
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
