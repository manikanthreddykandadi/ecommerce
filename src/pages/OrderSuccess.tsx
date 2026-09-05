import { Link, useSearchParams } from "react-router-dom";

function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId") ?? "Your order";
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-10 text-center">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl">✓</span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Thank you for shopping with ShopMart.
        </p>

        {/* Order ID */}
        <div className="mt-8 rounded-lg bg-gray-50 p-5">

          <p className="text-sm text-gray-500">
            Order ID
          </p>

          <p className="mt-2 text-xl font-bold text-gray-900">
            {orderId}
          </p>

        </div>

        {/* Delivery Information */}
        <div className="mt-6 rounded-lg border border-gray-200 p-5 text-left">

          <h2 className="text-xl font-bold text-gray-900">
            Delivery Information
          </h2>

          <div className="mt-4 space-y-2 text-gray-600">

            <p>
              <span className="font-medium text-gray-900">
                Estimated Delivery:
              </span>{" "}
              3–5 Business Days
            </p>

            <p>
              <span className="font-medium text-gray-900">
                Payment:
              </span>{" "}
              Payment Successful
            </p>

            <p>
              <span className="font-medium text-gray-900">
                Status:
              </span>{" "}
              Order Confirmed
            </p>

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <Link
            to="/products"
            className="flex-1 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="flex-1 rounded-lg border border-gray-300 px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;