import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-[#fdf6f0] border-b border-gray-300">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img
                    src="/basket-logo.png"
                    alt="Logo"
                    className="w-10 h-10"
                />
                <h1 className="text-2xl font-bold">CRAFTED BY CHOSEN</h1>
            </div>
            {/* Navigation Links */}
            <nav className="flex gap-6 text-lg font-semibold">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/account">My Account</Link>
            </nav>
        </header>
    );
}