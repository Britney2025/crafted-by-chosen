import React from "react";
export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#fdf8f5]">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2935/2935317.png"
                        alt="logo"
                        className="w-10 h-10"
                    />
                    <h1 className="font-bold text-lg tracking-wide">
                        Crafted by Chosen
                    </h1>
                </div>
                {/* Menu Links */}
                <ul className="flex gap-6 font-medium text-gray-700">
                    <li className="hover:text-orange-500 cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 cursor-pointer">Products</li>
                    <li className="hover:text-orange-500 cursor-pointer">Wishlist</li>
                    <li className="hover:text-orange-500 cursor-pointer">Cart</li>
                    <li className="hover:text-orange-500 cursor-pointer">My Account</li>
                </ul>
            </nav>
            {/* Hero Section */}
            <section className="text-center mt-8">
                <h2 className="text-3xl font-bold tracking-wide mb-2">
                    WELCOME TO CRAFTED BY CHOSEN
                </h2>
                <p className="text-gray-600 mb-6">
                    We have many promos for you every day, don’t miss out. Checkout now!
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition">
                    SHOP NOW
                </button>
            </section>
            {/* Product Grid */}
            <section className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 px-4">
                <div className="rounded-lg overflow-hidden border-4 border-orange-400">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-lg overflow-hidden border-4 border-orange-400">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-lg overflow-hidden border-4 border-orange-400">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="product"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-lg overflow-hidden border-4 border-orange-400">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
}