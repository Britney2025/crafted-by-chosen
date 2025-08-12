import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <Link>Crafted By Chosen</Link>
            <Link>Products</Link>
            <Link>Wishlist</Link>
            <Link>Cart</Link>
            <Link>Login</Link>
        </nav>
    </div>
  )
}

export default Navbar