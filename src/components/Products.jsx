import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useCart } from "../context/CartContext";
const products = [
    {
        id: 1,
        name: "Sweaters",
        category: "Sweater",
        price: 100,
        description: "100% cotton, hand-knitted stylish sweater.",
        image: "images/Sweaters.jpeg",
    },
    {
        id: 2,
        name: "Beanies",
        category: "Hats",
        price: 100,
        description: "Cozy and colorful beanie, perfect for winter.",
        image: "/images/Crochet beanies.jpeg",
    },
    {
        id: 3,
        name: "Green Tote Bag",
        category: "Bags",
        price: 100,
        description: "Handmade crochet bag with flower detail.",
        image: "/images/bagcharms.jpeg",
    },
    {
        id: 4,
        name: "Ruffled Dress",
        category: "Dresses",
        price: 150,
        description: "Elegant hand-knitted dress.",
        image: "/images/Crocheted dress.jpg",
    },
];
export default function Products() {
    const { addToCart } = useCart();
    const categories = ["All", "Tops", "Home decor", "Bottoms", "Sweater", "Dresses", "Hats", "Bags"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter products based on category + search
    const filteredProducts = products.filter((p) => {
        const matchesCategory =
            selectedCategory === "All" || p.category === selectedCategory;
        const matchesSearch =
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (
        <div className="bg-[#fdf6f0] min-h-screen p-6">
            {/* Search Bar */}
            <div className="flex justify-center mb-4">
                <div className="flex border border-gray-400 rounded overflow-hidden w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-3 py-1 outline-none flex-1"
                    />
                    <button className="px-3 bg-gray-200"><FaSearch /></button>
                </div>
            </div>
            {/* Categories */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full ${selectedCategory === cat
                            ? "bg-[#b3775a] text-white"
                            : "bg-[#c98e6b] text-white hover:bg-[#b3775a]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border-1 rounded-lg p-4 flex flex-col items-center text-center bg-[#c98e6b] shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-80 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg text-white font-bold mb-2">{product.name}</h3>
                            <p className="text-sm text-white mb-4">
                                {product.description}
                            </p>
                            <div className="flex justify-between gap-20 items-center mt-auto">
                                <span className="text-lg font-bold text-white mb-2">
                                    Ksh {product.price}
                                </span>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-[#fdf6f0] text-black font-semibold px-4 py-2 rounded-full hover:bg-[#b3775a]"
                                >
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No products found.</p>
            )}
        </div>
    );
}