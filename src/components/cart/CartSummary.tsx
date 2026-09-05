import { useNavigate } from "react-router-dom";

type CartSummaryProps = {
  subtotal: number;
  itemCount: number;
};

export default function CartSummary({
  subtotal,
  itemCount,
}: CartSummaryProps) {

  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/checkout");
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Cart Summary
      </h2>

      {/* Subtotal */}
      <div className="mb-4 flex justify-between text-gray-600">
        <span>Subtotal</span>

        <span className="font-medium">
          ₹{subtotal}
        </span>
      </div>

      {/* Shipping */}
      <div className="mb-4 flex justify-between text-gray-600">
        <span>Shipping</span>

        <span className="text-green-600">
          Free
        </span>
      </div>

      {/* Total */}
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
        type="button"
        onClick={handleCheckout}
        disabled={itemCount === 0}
        className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Proceed to Checkout
      </button>

    </div>
  );
}
