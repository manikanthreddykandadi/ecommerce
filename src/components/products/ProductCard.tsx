
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  rating: number;
};

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      image,
    });
  }

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md">

      {/* Product Image */}
      <div className="overflow-hidden">
        <Link to={`/product/${id}`} aria-label={`View ${name}`}>
          <img src={image} alt={name} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
        </Link>
      </div>

      {/* Product Details */}
      <div className="p-4">

        <Link to={`/product/${id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
          {name}
        </Link>

        {/* Rating */}
        <div className="flex items-center mt-2">
            <span className="text-yellow-500">★</span>

          <span className="ml-2 text-sm text-gray-500">
            ({rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ₹{price}
          </span>

          <span className="line-through text-gray-400">
            ₹{oldPrice}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={handleAddToCart}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>

          <button
            onClick={() => toggleWishlist(id)}
            aria-label={isWishlisted(id) ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
            className={`rounded-lg border px-4 transition hover:bg-gray-100 ${isWishlisted(id) ? "border-red-200 text-red-500" : ""}`}
          >
            <Heart size={18} fill={isWishlisted(id) ? "currentColor" : "none"} />
          </button>

        </div>

      </div>
    </article>
  );
}
