import {useState, useEffect} from 'react'
import AuthPage from './pages/AuthPage';
import ItemsList from './pages/ItemsList';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import {getUser} from './utilities/users-service'
import ProductsDetail from './pages/ProductsDetail';
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState(getUser())
  const [products, setProducts] = useState({})

  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      console.log(data)
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main className="App">
      {
        user ? ( 
        <div>
            <Navbar user={user} setUser={setUser} />
          <Routes>
              <Route path='/' element={<OrderHistoryPage product={products} />} />

              <Route path='/orders/new' element={<ItemsList setProducts={setProducts} products={products} />} />
              
              <Route path='/products/:id' element={<ProductsDetail products={products} setProducts={setProducts} />} />
              
              <Route path='/cart/:id' element={<Cart products={products} />} />
              
          </Routes>
            <Footer />
        </div>
        ) : (
          <AuthPage setUser={setUser} />
          )}
    </main>
  );
}

export default App;
