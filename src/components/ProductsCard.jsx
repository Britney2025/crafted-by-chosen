export default function ProductsCard({ product }) {
    return (
        <div className="border rounded-lg shadow hover:shadow-lg transition p-3">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-600">Ksh{product.price}</p>
            <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
            <button className="bg-orange-800 text-white px-3 py-1 mt-2 rounded hover:bg-brown-700">
                Add to Cart
            </button>
        </div >
    );
}