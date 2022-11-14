import React from 'react'

const Cart = ({ setProducts,products }) => {
  const thisProduct = products
  console.log(products,'ooooook');
  const { image, title, descriptoin, price, category } = thisProduct

  return (
    <div>

      {setProducts && setProducts.map((item, id) => (
        <div>
          <div></div>
          Cart
        </div>
// { products && products.map((product) => {
//   console.log(products);
//   const { title, image, price, id } = product
      ))}
    </div>
  )
}

export default Cart