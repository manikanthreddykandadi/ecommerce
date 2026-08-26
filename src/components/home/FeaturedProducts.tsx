import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading + View All */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Products
            </h2>

            <p className="text-gray-600 mt-3">
              Discover our most popular products.
            </p>
          </div>

          {/* View All Button */}
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg
                       hover:bg-blue-700 transition font-medium"
          >
            View All
          </Link>

        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (
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

export default FeaturedProducts;