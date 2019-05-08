import React from 'react'
import mockProducts from '../mockdata.json'

const Product = ({}) => {
  return (
    <tbody>
      { mockProducts.map((el, i) => {
        return (
          <tr key={`${i}-product`}>
            <td>
              <img
                src={require(`../images/${el.image}`)}
                alt={el.name}
                className='product-image'
              ></img>
            </td>
            <td>
              <h3>{el.name}</h3>
              <p>{el.sku}</p>
            </td>
            <td>{el.quantity}</td>
            <td>${el.unitPrice}</td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default Product
