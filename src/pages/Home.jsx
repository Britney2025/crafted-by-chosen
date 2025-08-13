import ProductsCard from '../components/ProductsCard'

const sampleProducts = [
    { id: 1, name: "Crochet Tote Bag", price: 1200, image: "https://via.placeholder.com/150", inStock: true },
    { id: 2, name: "Crochet Scarf", price: 500, image: "https://via.placeholder.com/150", inStock: false }
];
export default function Home() {
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleProducts.map(p => <ProductsCard key={p.id} product={p} />)}
        </div>
    );
}