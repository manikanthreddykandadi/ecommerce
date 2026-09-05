import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Checkout() {
  const { itemCount } = useCart();

  if (!itemCount) {
    return <section className="min-h-screen bg-gray-50 px-6 py-16 text-center"><h1 className="text-3xl font-bold">Your cart is empty</h1><p className="mt-3 text-gray-600">Add products before starting checkout.</p><Link to="/products" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white">Browse products</Link></section>;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12">

      <div className="mx-auto max-w-7xl px-6">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="mt-2 text-gray-600">
            Complete your order by providing your details.
          </p>
        </div>

        {/* Checkout Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;
