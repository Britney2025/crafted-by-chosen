import React from "react";
const ProductsCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600">KES {product.price}</p>
            <button className="mt-4 w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
                Add to Cart
            </button>
        </div>
    );
};
export default ProductsCard;






