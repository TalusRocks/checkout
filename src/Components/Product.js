import React from 'react'
import mockProducts from '../mockdata.json'

const Product = ({}) => {
  return (
    <div>
      { mockProducts.map((el, i) => {
        return (
          <div key={`${i}-product`} className='product-container flex-center'>

            <div className='flex-center'>
              <div>
                <img
                  src={require(`../images/${el.image}`)}
                  alt={el.name}
                  className='product-image'
                ></img>
              </div>
              <div className='name-sku-box'>
                <h3>{el.name}</h3>
                <p>{el.sku}</p>
              </div>
            </div>

            <div>
              <p>qty: {el.quantity}</p>
            </div>

            <div>
              <p>price: {el.unitPrice}</p>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Product
