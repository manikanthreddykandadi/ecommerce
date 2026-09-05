import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    itemCount,
  } = useCart();

  let subtotal = 0;

  for (let i = 0; i < cartItems.length; i++) {
    subtotal =
      subtotal +
      cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-8 text-4xl font-bold">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Products */}
          <div className="space-y-5 lg:col-span-2">

            {cartItems.length === 0 ? (

              <div className="rounded-xl bg-white p-10 text-center shadow">

                <h2 className="text-2xl font-semibold">
                  Your cart is empty
                </h2>

                <p className="mt-2 text-gray-500">
                  Add some products to your cart.
                </p>

              </div>

            ) : (

              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  product={{
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                  }}
                  quantity={item.quantity}
                  onIncrease={() =>
                    increaseQuantity(item.id)
                  }
                  onDecrease={() =>
                    decreaseQuantity(item.id)
                  }
                  onRemove={() =>
                    removeItem(item.id)
                  }
                />
              ))

            )}

          </div>

          {/* Summary */}
          <CartSummary
            subtotal={subtotal}
            itemCount={itemCount}
          />

        </div>

      </div>

    </section>
  );
}

export default Cart;

