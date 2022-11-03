import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as userService from '../utilities/users-service'

const Navbar = ({ user, setUser }) => {
  
  const handleLogOut = () => {
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <NavLink to='/orders'>Order History</NavLink> {' '} | {' '}
      <NavLink to='/orders/new'>NewOrder</NavLink>
      {' '}
      <span>Welcome, {user.name} </span>
      {' '}{' '}
      <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink>
    </nav>
  )
}

export default Navbar