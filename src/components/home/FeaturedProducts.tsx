import { products } from "../../data/products";
import type { Product } from "../../types/Product";
import ProductCard from "../products/ProductCard";

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

          {products.slice(0,4).map((product: Product)=>(
          <ProductCard
            key={product.id}
            {...product}
          />
          ))}
        </div>

      </div>
    </section>
  );
}