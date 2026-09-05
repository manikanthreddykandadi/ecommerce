import { useEffect, useMemo, useState } from "react";
import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import Loader from "../components/ui/Loader";
import { fetchProducts } from "../services/productService";
import type { Product } from "../types/Product";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    let active = true;
    fetchProducts().then((items) => {
      if (active) {
        setProducts(items);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, []);

  const categories = [...new Set(products.map((product) => product.category))].sort();
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    });
    return [...filtered].sort((first, second) => {
      if (sort === "price-asc") return first.price - second.price;
      if (sort === "price-desc") return second.price - first.price;
      return second.rating - first.rating;
    });
  }, [category, products, search, sort]);

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
          <ProductFilters search={search} category={category} sort={sort} categories={categories} onSearchChange={setSearch} onCategoryChange={setCategory} onSortChange={setSort} />
        </div>

        {/* Products - BELOW */}
        {loading ? <Loader /> : visibleProducts.length ? <ProductGrid products={visibleProducts} /> : <p className="rounded-xl bg-white p-10 text-center text-gray-600">No products match your search.</p>}

      </div>

    </section>
  );
}

export default Products;