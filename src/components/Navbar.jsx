import React from 'react'

function Navbar() {
    return (
        <nav className="w-full bg-[#FAF4EF] border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/logo.png" // replace with your logo path
                        alt="Crafted by Chosen"
                        className="w-10 h-10 object-contain"
                    />
                    <span className="text-lg font-bold tracking-wide">CRAFTED BY CHOSEN</span>
                </div>
                {/* Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <li className="hover:text-orange-500 cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 cursor-pointer">Products</li>
                    <li className="hover:text-orange-500 cursor-pointer flex items-center gap-1">
                        Wishlist <FaHeart className="text-red-500" size={16} />
                    </li>
                </ul>
                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <FaShoppingCart
                        className="cursor-pointer hover:text-orange-500"
                        size={20}
                    />
                    <div className="flex items-center cursor-pointer hover:text-orange-500">
                        <FaUser size={18} />
                        <span className="ml-1 hidden sm:inline">My Account</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar