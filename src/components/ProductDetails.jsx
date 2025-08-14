import React from "react";
import { useParams } from "react-router-dom";
// import { products } from "../data/products";
import { FaStar } from "react-icons/fa";
function ProductDetails() {
    const { id } = useParams();
    const product = product.find((p) => p.id === parseInt(id));
    if (!product) {
        return <h2 className="text-center text-red-500">Product not found</h2>;
    }
    return (
        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                className="rounded-lg shadow-lg w-full"
            />
            {/* Product Info */}
            <div>
                <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-xl font-semibold text-green-600 mb-4">
                    ${product.price}
                </p>
                {/* Rating */}
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`${index < product.rating ? "text-yellow-500" : "text-gray-300"
                                }`}
                        />
                    ))}
                    <span className="ml-2 text-gray-500">{product.rating} / 5</span>
                </div>
                {/* Add to Cart */}
                <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
                    Add to Cart
                </button>
                {/* Reviews */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-3">Customer Reviews</h2>
                    {product.reviews && product.reviews.length > 0 ? (
                        <ul className="space-y-4">
                            {product.reviews.map((review, index) => (
                                <li key={index} className="border p-3 rounded-lg">
                                    <p className="text-gray-700">{review.comment}</p>
                                    <span className="text-sm text-gray-500">
                                        - {review.user}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;