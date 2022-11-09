import {useParams} from 'react'

category
description
id
image
price
rating
{ rate: 2.9, count: 470 }
title

const ProductsDetail = (product) => {
  const { id } = useParams()
  const thisProduct = product.find(prod => prod.id === id )
  return (
    <div>
      ProductsList
      <img src={image} alt="image" />
      <h4>{ title}</h4>
      <h4>{ category}</h4>
      <h4>{ discriptoin}</h4>
    </div>
  )
}

export default ProductsDetail