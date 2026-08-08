type CartSummaryProps = {
  subtotal: number;
};

export default function CartSummary({
  subtotal,
}: CartSummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-fit">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Cart Summary
      </h2>

      {/* Subtotal */}
      <div className="flex justify-between text-gray-600 mb-4">
        <span>Subtotal</span>

        <span className="font-medium">
          ₹{subtotal}
        </span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between text-gray-600 mb-4">
        <span>Shipping</span>

        <span className="text-green-600">
          Free
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 pt-4">

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span className="text-blue-600">
            ₹{subtotal}
          </span>
        </div>

      </div>

      {/* Checkout Button */}
      <button
        className="
          w-full
          mt-6
          bg-blue-600
          text-white
          py-3
          rounded-lg
          font-semibold
          hover:bg-blue-700
          transition
        "
      >
        Proceed to Checkout
      </button>

    </div>
  );
}