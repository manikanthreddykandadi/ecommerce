import ProductFilters from "../components/products/ProductFilters";

function Products() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Products
        </h1>

        <p className="mt-2 text-gray-600">
          Browse our latest collection.
        </p>
      </div>

      <ProductFilters />
    </section>
  );
}

export default Products;