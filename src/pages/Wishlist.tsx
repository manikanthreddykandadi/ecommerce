import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { useWishlist } from "../contexts/WishlistContext";
import { fetchProducts } from "../services/productService";
import type { Product } from "../types/Product";

function Wishlist() {
  const { wishlist } = useWishlist();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => { fetchProducts().then(setProducts); }, []);
  const saved = products.filter((product) => wishlist.includes(product.id));
  return <section className="min-h-screen bg-gray-50 px-6 py-12"><div className="mx-auto max-w-7xl"><h1 className="text-4xl font-bold">Wishlist</h1>{saved.length ? <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{saved.map((product) => <ProductCard key={product.id} {...product} />)}</div> : <p className="mt-8 rounded-xl bg-white p-8 text-gray-600 shadow">Your wishlist is empty.</p>}</div></section>;
}

export default Wishlist;