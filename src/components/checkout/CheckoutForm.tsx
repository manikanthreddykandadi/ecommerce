import { useState } from "react";

function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("Order placed successfully!");
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Checkout Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Address
          </label>

          <textarea
            rows={4}
            placeholder="Enter your complete address"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* City and Pincode */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              City
            </label>

            <input
              type="text"
              placeholder="Enter city"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Pincode
            </label>

            <input
              type="text"
              placeholder="Enter pincode"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

        </div>

        {/* Payment Method */}
        <div>

          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Payment Method
          </h3>

          <div className="space-y-3">

            {/* Cash on Delivery */}
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-gray-50">

              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(event) =>
                  setPaymentMethod(event.target.value)
                }
              />

              <div>
                <p className="font-medium">
                  Cash on Delivery
                </p>

                <p className="text-sm text-gray-500">
                  Pay when your order arrives.
                </p>
              </div>

            </label>

            {/* UPI */}
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-gray-50">

              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(event) =>
                  setPaymentMethod(event.target.value)
                }
              />

              <div>
                <p className="font-medium">
                  UPI
                </p>

                <p className="text-sm text-gray-500">
                  Pay using UPI.
                </p>
              </div>

            </label>

            {/* Card */}
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-gray-50">

              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(event) =>
                  setPaymentMethod(event.target.value)
                }
              />

              <div>
                <p className="font-medium">
                  Credit / Debit Card
                </p>

                <p className="text-sm text-gray-500">
                  Pay securely using your card.
                </p>
              </div>

            </label>

          </div>

          {/* Card Details */}
          {paymentMethod === "card" && (
            <div className="mt-4 space-y-4 rounded-lg bg-gray-50 p-4">

              <input
                type="text"
                placeholder="Card Number"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="MM/YY"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />

                <input
                  type="password"
                  placeholder="CVV"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />

              </div>

            </div>
          )}

        </div>

        {/* Place Order */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Place Order
        </button>

      </form>

    </div>
  );
}

export default CheckoutForm;
