import { Link } from 'react-router-dom'
import './pages.css'

const ItemsList = ({products}) => {
  

  return (
    <div className='itemsList'>
      <h2 className='Ih2'>Products</h2>
      <div className='iList'>

      {products && products.map((product) => {
        console.log(products);
        const { title, image, price, id } = product
        console.log(product, 'lililililololo');
        return (

          <div className='Tdiv' key={id} >
              <div className='Fdiv' >
              <h3>
                <Link to={`/products/${id}`}> {title} </Link>
              </h3>
                <img className='iImg' src={image} alt="" />
              <p>{price}</p>
            </div>
          </div>

        )
      })}
      </div>
    </div>
  )
}

export default ItemsList