import ProductCard from "../products/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    oldPrice: 3499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    oldPrice: 4999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2999,
    oldPrice: 3999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    oldPrice: 1999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              Featured Products
            </h2>

            <p className="text-gray-500 mt-2">
              Discover our most popular products.
            </p>
          </div>

          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            View All
          </button>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
              image={product.image}
            />

          ))}

        </div>

      </div>
    </section>
  );
}