import {useState, useEffect} from 'react'
import AuthPage from './pages/AuthPage';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import {getUser} from './utilities/users-service'
import ProductsDetail from './pages/ProductsDetail';

function App() {
  const [user, setUser] = useState(getUser())
  const [products, setProducts] = useState([])
  useEffect(() => {
    // setUser
  })

  return (
    <main className="App">
      {
        user ? ( 
        <div>
            <Navbar user={user} setUser={setUser} />
          <Routes>
              <Route path='/orders/new' element={<NewOrderPage setProducts={setProducts} products={products} />} />
              
              <Route path='/orders' element={<OrderHistoryPage product={products} />} />
              
            <Route path='/product/:symbol' element={<ProductsDetail />} />
          </Routes>
          
        </div>
        ) : (
            <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
