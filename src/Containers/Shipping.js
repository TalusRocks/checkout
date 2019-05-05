import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Product from '../Components/Product'
import mockProducts from '../mockdata.json'

class Shipping extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='shipping-wrapper'>
        <h1>This is the billing/shipping page</h1>
        <Link to='/'>
          <p>Go Back to Cart</p>
        </Link>
        <Link to='/confirmation'>
          <p>Submit Order</p>
        </Link>
      </div>
    )
  }
}

export default Shipping
