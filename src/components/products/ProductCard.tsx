import type { Product } from "../../types/Product";

type ProductCardProps = Product;

export default function ProductCard({
  name,
  image,
  category,
  price,
  oldPrice,
  rating,
  isLatest,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden group">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Latest Badge */}
        {isLatest && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEW
          </span>
        )}

      </div>

      {/* Product Info */}
      <div className="p-4">

        <p className="text-sm text-gray-500">
          {category}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-1">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-2">

          <span className="text-yellow-500">
            ⭐⭐⭐⭐⭐
          </span>

          <span className="ml-2 text-sm text-gray-500">
            {rating}
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">

          <span className="text-2xl font-bold text-blue-600">
            ₹{price}
          </span>

          {oldPrice > price && (
            <span className="text-gray-400 line-through">
              ₹{oldPrice}
            </span>
          )}

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <button
            className="border px-4 rounded-lg hover:bg-gray-100 transition"
          >
            ❤️
          </button>

        </div>

      </div>

    </div>
  );
}