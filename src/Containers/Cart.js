import React, { Component } from 'react'
import mockProducts from '../mockdata.json'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        { mockProducts.map((el, i) => {
          return (
            <div key={`${i}-product`}>
              <img src={require(`../images/${el.image}`)} alt={el.name}></img>
              <div>
                <h3>{el.name}</h3>
                <p>{el.sku}</p>
              </div>
              <div>
                <p>{el.quantity}</p>
              </div>
              <div>
                <p>{el.unitPrice}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cart
