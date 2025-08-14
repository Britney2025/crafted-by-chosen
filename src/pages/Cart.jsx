import React from "react";
import { useCart } from "../context/CartContext";


export default function Cart() {
    const { cartItems, removeFromCart, changeQuantity } = useCart();
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <div className="bg-[#fdf6f0] min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-6 flex items-center">
                Cart
            </h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#c98e6b] text-white p-4 rounded-lg flex items-center justify-between mb-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 rounded-lg mr-4"
                            />
                            <div className="flex-1">
                                <p className="font-bold">{item.name}</p>
                                <p className="text-sm">{item.description}</p>
                                <p>Ksh {item.price}</p>
                                <p className="text-xs">*In stock</p>
                            </div>
                            {/* Quantity Controls */}
                            <div className="flex items-center">
                                <button
                                    onClick={() => changeQuantity(item.id, -1)}
                                    className="px-2 bg-white text-black rounded"
                                >
                                    -
                                </button>
                                <span className="px-3">{item.quantity}</span>
                                <button
                                    onClick={() => changeQuantity(item.id, 1)}
                                    className="px-2 bg-white text-black rounded"
                                >
                                    +
                                </button>
                            </div>
                            {/* Remove Button */}
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-4 bg-white text-black px-4 py-1 rounded-full"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    {/* Checkout */}
                    <div className="mt-6">
                        <button className="bg-[#b3775a] text-white px-6 py-3 rounded-full w-full">
                            Checkout (Ksh {total})
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
