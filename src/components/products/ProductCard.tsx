import { useCart } from "../../contexts/CartContext";

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


  function handleAddToCart() {

    addToCart({
      id,
      name,
      price,
      image,
    });

  }


  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden group">

      {/* Image */}
      <div className="overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />

      </div>


      {/* Product Details */}
      <div className="p-4">

        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>


        {/* Rating */}
        <div className="flex items-center mt-2">

          <span className="text-yellow-500">
            ⭐⭐⭐⭐⭐
          </span>

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