import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const NewOrderPage = ({products}) => {
  

  return (
    <div>
      NewOrderPage
      {products && products.map((product) => {
        console.log(products);
        const { title, image, price, id } = product
        return (
          <div key={id} >
            <div>
              <h3>
                <Link to={`/products/${id}`}> {title} </Link>
              </h3>
              <img src={image} alt="" />
              <p>{price}</p>
            </div>
          </div>

        )
      })}
    </div>
  )
}

export default NewOrderPage