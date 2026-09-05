import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { saveOrder } from "../../utils/orders";

function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!cartItems.length) return;
    const formData = new FormData(e.currentTarget);
    const orderId = `SM-${Date.now().toString(36).toUpperCase()}`;
    saveOrder({
      id: orderId,
      createdAt: new Date().toISOString(),
      status: "Confirmed",
      paymentMethod,
      total: subtotal,
      items: cartItems,
      customer: {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        address: String(formData.get("address") ?? ""),
      },
    });
    clearCart();
    navigate(`/order-success?orderId=${orderId}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 md:p-8"
    >

      {/* =========================
          CUSTOMER INFORMATION
      ========================== */}

      <h2 className="text-2xl font-bold text-gray-900">
        Customer Information
      </h2>

      <p className="mt-2 text-gray-500">
        Enter your personal details.
      </p>

      {/* Name */}
      <div className="mt-6">
        <label className="text-lg font-medium text-gray-800">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          required
          placeholder="Enter your full name"
          className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
        />
      </div>

      {/* Email + Phone */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

        {/* Email */}
        <div>
          <label className="text-lg font-medium text-gray-800">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-lg font-medium text-gray-800">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
          />
        </div>

      </div>


      {/* =========================
          SHIPPING ADDRESS
      ========================== */}

      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Shipping Address
      </h2>

      <p className="mt-2 text-gray-500">
        Enter the address where you want your order delivered.
      </p>

      {/* Address */}
      <div className="mt-6">

        <label className="text-lg font-medium text-gray-800">
          Address
        </label>

        <textarea
          name="address"
          required
          placeholder="Enter your complete address"
          rows={5}
          className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
        />

      </div>


      {/* City + State */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

        {/* City */}
        <div>

          <label className="text-lg font-medium text-gray-800">
            City
          </label>

          <input
            type="text"
            name="city"
            required
            placeholder="Enter city"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
          />

        </div>

        {/* State */}
        <div>

          <label className="text-lg font-medium text-gray-800">
            State
          </label>

          <input
            type="text"
            name="state"
            required
            placeholder="Enter state"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
          />

        </div>

      </div>


      {/* Pincode + Country */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

        {/* Pincode */}
        <div>

          <label className="text-lg font-medium text-gray-800">
            Pincode
          </label>

          <input
            type="text"
            required
            maxLength={6}
            placeholder="Enter pincode"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
          />

        </div>

        {/* Country */}
        <div>

          <label className="text-lg font-medium text-gray-800">
            Country
          </label>

          <input
            type="text"
            required
            defaultValue="India"
            placeholder="Enter country"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
          />

        </div>

      </div>


      {/* =========================
          PAYMENT METHOD
      ========================== */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold text-gray-900">
          Payment Method
        </h2>

        <p className="mt-2 text-gray-500">
          Choose how you want to pay.
        </p>


        <div className="mt-6 space-y-4">

          {/* =====================
              CASH ON DELIVERY
          ====================== */}

          <label
            className={`flex cursor-pointer items-center gap-4 rounded-lg border p-6 transition ${
              paymentMethod === "cod"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300"
            }`}
          >

            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            <div>

              <p className="text-lg font-medium">
                Cash on Delivery
              </p>

              <p className="text-gray-500">
                Pay when your order arrives.
              </p>

            </div>

          </label>


          {/* =====================
              UPI
          ====================== */}

          <label
            className={`flex cursor-pointer items-center gap-4 rounded-lg border p-6 transition ${
              paymentMethod === "upi"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300"
            }`}
          >

            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            <div>

              <p className="text-lg font-medium">
                UPI
              </p>

              <p className="text-gray-500">
                Pay using UPI.
              </p>

            </div>

          </label>


          {/* UPI ID */}
          {paymentMethod === "upi" && (
            <div className="rounded-lg bg-gray-50 p-5">

              <label className="text-lg font-medium">
                UPI ID
              </label>

              <input
                type="text"
                required
                placeholder="example@upi"
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
              />

            </div>
          )}


          {/* =====================
              CARD
          ====================== */}

          <label
            className={`flex cursor-pointer items-center gap-4 rounded-lg border p-6 transition ${
              paymentMethod === "card"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300"
            }`}
          >

            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            <div>

              <p className="text-lg font-medium">
                Credit / Debit Card
              </p>

              <p className="text-gray-500">
                Pay securely using your card.
              </p>

            </div>

          </label>


          {/* CARD DETAILS */}

          {paymentMethod === "card" && (
            <div className="rounded-lg bg-gray-50 p-5">

              {/* Card Number */}
              <div>

                <label className="text-lg font-medium">
                  Card Number
                </label>

                <input
                  type="text"
                  required
                  maxLength={16}
                  placeholder="1234 5678 9012 3456"
                  className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
                />

              </div>


              {/* Expiry + CVV */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label className="text-lg font-medium">
                    Expiry Date
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
                  />

                </div>


                <div>

                  <label className="text-lg font-medium">
                    CVV
                  </label>

                  <input
                    type="password"
                    required
                    maxLength={3}
                    placeholder="123"
                    className="mt-2 w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
                  />

                </div>

              </div>

            </div>
          )}

        </div>

      </div>


      {/* =========================
          PLACE ORDER
      ========================== */}

      <button
        type="submit"
        className="mt-10 w-full rounded-lg bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
      >
        Place Order
      </button>
    </form>
  );
}

export default CheckoutForm;