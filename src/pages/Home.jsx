import React from "react";
export default function Home() {
    return (

        <div className="flex flex-col md:flex-row min-h-screen bg-[#fdf6f0] font-sans">

            {/* Left Section */}
            <div className="flex-1 flex flex-col items-center justify-center bg-[#f8efe7] p-8">
                <img
                    src="/images/Sweaters.jpeg"
                    alt="Knitted sweaters"
                    className="rounded-lg shadow-lg w-full max-w-sm border-4 border-orange-400"
                />
                <p className="text-center mt-6 text-gray-700 max-w-xs">
                    We have many promos for you every day, don’t miss out. Checkout now!
                </p>
                <button className="mt-4 bg-[#c98e6b] text-white px-6 py-2 rounded-full shadow hover:bg-[#b3775a]">
                    SHOP NOW
                </button>

            </div>

            <div>

                <div className="text-center mt-4">
                    <h1 className="text-xl md:text-2xl font-bold">
                        WELCOME TO CRAFTED BY CHOSEN
                    </h1>
                </div>
                <div className="border-4 border-orange-400 rounded-lg m-8 p-4 grid grid-cols-3 gap-4">
                    <img src="/images/crochethandbags.jpeg" alt="Bags" className="rounded-lg shadow h-50 w-full" />
                    <img src="/images/home-decor3.jpeg" alt="Decor" className="rounded-lg shadow h-50 w-full" />
                    <img src="/images/Crocheted dress.jpg" alt="Knitted dress" className="rounded-lg shadow h-50 w-full" />


                </div>

            </div>
        </div>
    );
}