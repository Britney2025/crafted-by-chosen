import React from "react";
export default function HeroSection() {
    return (
        <section className="bg-[#f1e7dd]">
            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-800">
                        Handcrafted with <span className="text-orange-500">Love</span> & Style
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Discover unique crochet pieces designed to bring warmth, beauty, and elegance to your wardrobe.
                    </p>
                    <button className="bg-[#a4826d] text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
                        Shop Now
                    </button>
                </div>
                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="/hero-product.png" // Replace with your featured product image
                        alt="Featured Crochet"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}