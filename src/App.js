import {useState, useEffect} from 'react'
import AuthPage from './pages/AuthPage';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState({})

  return (
    <main className="App">
      {
        user ? ( 
        <>
        <Navbar />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        ) : (
          <AuthPage />
      )}
    </main>
  );
}

export default App;
