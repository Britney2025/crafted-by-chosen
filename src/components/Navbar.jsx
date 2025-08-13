import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/">Crafted By Chosen</Link>
            <Link to="/products">Products</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/account">My Account</Link>
        </nav>
    </div>
  )
}

export default Navbar