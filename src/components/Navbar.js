import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as userService from '../utilities/users-service'
import './navbar.css'

const Navbar = ({ user, setUser }) => {
  
  const handleLogOut = () => {
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <NavLink to='/orders'>Home</NavLink> 
      <NavLink to='/orders/new'>Products</NavLink>
      <span>Welcome, {user.name} </span>
      <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink>
    </nav>
  )
}

export default Navbar