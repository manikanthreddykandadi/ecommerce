
import { useCart } from "../../contexts/CartContext";

function OrderSummary() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Order Summary
      </h2>

      <div className="space-y-4">

        {cartItems.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>

            </div>
          ))
        )}

      </div>

      <div className="my-6 border-t" />

      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>

        <span>
          ₹{subtotal}
        </span>
      </div>

      <div className="mt-4 flex justify-between text-gray-600">
        <span>Shipping</span>

        <span className="text-green-600">
          Free
        </span>
      </div>

      <div className="mt-4 border-t pt-4">

        <div className="flex justify-between text-xl font-bold">

          <span>Total</span>

          <span className="text-blue-600">
            ₹{subtotal}
          </span>

        </div>

      </div>

    </div>
  );
}

export default OrderSummary;

