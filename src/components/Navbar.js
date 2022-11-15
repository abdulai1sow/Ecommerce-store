import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as userService from '../utilities/users-service'
import './navbar.css'
import Cart from '../pages/Cart'

const Navbar = ({ user, setUser }) => {
  
  const handleLogOut = () => {
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <NavLink to='/'>Home</NavLink> 
      <NavLink to='/orders/new'>Products</NavLink>
      <span>Welcome, {user.name} </span>
      <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink>
      <NavLink to='/orders/new'>Cart</NavLink>
    </nav>
  )
}

export default Navbar