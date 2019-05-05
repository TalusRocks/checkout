import React from 'react'
import mockProducts from '../mockdata.json'

const Product = ({}) => {
  return (
    <div>
      { mockProducts.map((el, i) => {
        return (
          <div key={`${i}-product`} className='product-container flex-center'>

            <div className='flex-center image-name-box'>

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


            <div className='quantity-price-box'>
              <p>Qty: {el.quantity}</p>
              <p>Each: ${el.unitPrice}</p>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Product
