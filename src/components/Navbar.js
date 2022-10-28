import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/orders'>Order History</NavLink> {' '} | {' '}
      <NavLink to='/orders/new'>NewOrder</NavLink>
    </nav>
  )
}

export default Navbar