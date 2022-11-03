import {useState, useEffect} from 'react'
import AuthPage from './pages/AuthPage';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import {getUser} from './utilities/users-service'

function App() {
  const [user, setUser] = useState(getUser())

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
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </div>
        ) : (
            <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
