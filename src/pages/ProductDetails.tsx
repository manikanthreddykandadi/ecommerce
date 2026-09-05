import { useEffect, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { fetchProduct } from "../services/productService";
import type { Product } from "../types/Product";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  useEffect(() => {
    fetchProduct(Number(id)).then((item) => {
      setProduct(item);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <section className="mx-auto max-w-7xl px-6 py-16 text-center text-gray-600">Loading product...</section>;
  }

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-4 text-3xl font-bold">Product Not Found</h1>
        <Link to="/products" className="text-blue-600 hover:underline">Back to Products</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <img src={product.image} alt={product.name} className="h-full max-h-[560px] w-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-blue-600">{product.category}</p>
          <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-yellow-500">★ {product.rating.toFixed(1)}</p>
          <div className="mt-6 flex items-center gap-3">
            <h2 className="text-3xl font-bold text-blue-600">₹{product.price}</h2>
            <span className="text-gray-400 line-through">₹{product.oldPrice}</span>
          </div>
          <p className="mt-6 leading-7 text-gray-600">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => addToCart(product)} className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              <ShoppingBag size={18} /> Add to Cart
            </button>
            <button onClick={() => toggleWishlist(product.id)} className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100">
              <Heart size={18} fill={isWishlisted(product.id) ? "currentColor" : "none"} />
              {isWishlisted(product.id) ? "Saved" : "Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
