import { useParams } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'


const ProductsDetail = ({ products }) => {
  console.log(products,'lloloooo')
  // const { products, setProducts } = product
  
  const { id } = useParams()
  console.log(id, 'iidididi')
  // const thisProduct = products.find(prod => prod.id === id)
  const thisProduct = products[id]
  console.log(thisProduct, 'ooooooook');
  const { image, title, descriptoin, price, category } = thisProduct
  
  const addItem = () => {
    thisProduct()

  }
  return (
    <div>
      <h1>
        
      ProductsList
     </h1>
      <img src={image} alt="" />
      <h4>{ title}</h4>
      <h4>{ category}</h4>
      <h4>{ descriptoin}</h4>
      <p>{ price}</p>

      <button onClick={addItem} >
        <BsCartPlus style={{ marginRight: '5px'}} />
        ADD TO CART
      </button>
    </div>
  )
}

export default ProductsDetail