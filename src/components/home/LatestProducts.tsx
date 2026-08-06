import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";

function LatestProducts() {

  const latestProducts = products.filter(
    (product) => product.isLatest
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Latest Products
          </h2>

          <p className="text-gray-600 mt-3">
            Check out our newest arrivals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
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

export default LatestProducts;