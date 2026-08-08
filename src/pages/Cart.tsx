
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../contexts/CartContext";

function Cart() {
  // Get cart data and functions from CartContext
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  // ----------------------------------
  // Calculate subtotal
  // ----------------------------------

  let subtotal = 0;

  for (let i = 0; i < cartItems.length; i++) {
    subtotal =
      subtotal +
      cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* ----------------------------------
          Page Title
      ---------------------------------- */}

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {/* ----------------------------------
          Main Cart Layout
      ---------------------------------- */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ----------------------------------
            Cart Products
        ---------------------------------- */}

        <div className="lg:col-span-2 space-y-5">

          {cartItems.length === 0 ? (

            // Empty Cart
            <div className="bg-white rounded-xl shadow p-10 text-center">

              <h2 className="text-2xl font-semibold text-gray-700">
                Your cart is empty
              </h2>

              <p className="text-gray-500 mt-2">
                Add some products to your cart.
              </p>

            </div>

          ) : (

            // Cart Items
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

        {/* ----------------------------------
            Cart Summary
        ---------------------------------- */}

        <CartSummary
          subtotal={subtotal}
        />

      </div>

    </section>
  );
}

export default Cart;
