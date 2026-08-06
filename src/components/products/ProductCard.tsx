type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  rating: number;
};

export default function ProductCard({
  title,
  image,
  category,
  price,
  rating,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden group">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4">

        <p className="text-sm text-gray-500">
          {category}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-1">
          {title}
        </h3>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>

          <span className="ml-2 text-sm text-gray-500">
            ({rating})
          </span>
        </div>

        <div className="mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ₹{price}
          </span>
        </div>

        <div className="flex gap-3 mt-6">

          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>

          <button className="border px-4 rounded-lg hover:bg-gray-100">
            ❤️
          </button>

        </div>

      </div>

    </div>
  );
}
