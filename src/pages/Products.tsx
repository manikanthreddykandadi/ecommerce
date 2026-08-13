import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";

function Products() {
  return (
    <section className="min-h-screen bg-gray-100 py-12">

      <div className="mx-auto max-w-7xl px-6">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Products
          </h1>

          <p className="mt-2 text-gray-600">
            Browse our latest collection.
          </p>
        </div>

        {/* Filter - TOP */}
        <div className="mb-8">
          <ProductFilters />
        </div>

        {/* Products - BELOW */}
        <div>
          <ProductGrid />
        </div>

      </div>

    </section>
  );
}

export default Products;