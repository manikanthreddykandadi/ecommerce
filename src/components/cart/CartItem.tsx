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
    <div className="rounded-xl bg-white p-5 shadow">

      <div className="flex flex-col gap-5 sm:flex-row">

        {/* Image */}
        <div className="shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="h-32 w-full rounded-lg object-cover sm:w-32"
          />
        </div>

        {/* Details */}
        <div className="flex-1">

          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2>

          <p className="mt-2 text-gray-500">
            ₹{product.price}
          </p>

          {/* Quantity */}
          <div className="mt-5 flex items-center gap-3">

            <button
              type="button"
              onClick={onDecrease}
              className="h-9 w-9 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              -
            </button>

            <span className="w-8 text-center font-semibold">
              {quantity}
            </span>

            <button
              type="button"
              onClick={onIncrease}
              className="h-9 w-9 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              +
            </button>

          </div>

          {/* Remove */}
          <button
            type="button"
            onClick={onRemove}
            className="mt-4 text-sm text-red-500 hover:text-red-700"
          >
            Remove
          </button>

        </div>

        {/* Total */}
        <div className="sm:text-right">

          <p className="text-sm text-gray-500">
            Total
          </p>

          <p className="mt-1 text-xl font-bold text-blue-600">
            ₹{product.price * quantity}
          </p>

        </div>

      </div>

    </div>
  );
}



