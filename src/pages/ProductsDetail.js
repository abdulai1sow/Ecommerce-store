import {useParams} from 'react'


const ProductsDetail = ({ product }) => {
  const { products, setProducts } = product
  
  const { id } = useParams()
  const thisProduct = product.find(prod => prod.id === id )
  return (
    <div>
      ProductsList
      <img src={image} alt="image" />
      <h4>{ title}</h4>
      <h4>{ category}</h4>
      <h4>{ discriptoin}</h4>
      <p>{ price}</p>
    </div>
  )
}

export default ProductsDetail