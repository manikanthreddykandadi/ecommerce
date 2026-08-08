type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItemProps = {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export default function CartItem({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <div className="flex flex-col sm:flex-row gap-5">

        {/* Product Image */}
        <div className="shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full sm:w-32 h-32 object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">

          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2>

          <p className="text-gray-500 mt-2">
            ₹{product.price}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mt-5">

            <button
              onClick={onDecrease}
              className="w-9 h-9 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              -
            </button>

            <span className="w-8 text-center font-semibold">
              {quantity}
            </span>

            <button
              onClick={onIncrease}
              className="w-9 h-9 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              +
            </button>

          </div>

          {/* Remove */}
          <button
            onClick={onRemove}
            className="mt-4 text-red-500 hover:text-red-700 text-sm"
          >
            Remove
          </button>

        </div>

        {/* Product Total */}
        <div className="sm:text-right">

          <p className="text-sm text-gray-500">
            Total
          </p>

          <p className="text-xl font-bold text-blue-600 mt-1">
            ₹{product.price * quantity}
          </p>

        </div>

      </div>

    </div>
  );
}