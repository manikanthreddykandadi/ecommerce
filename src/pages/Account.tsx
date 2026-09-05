import { Link } from "react-router-dom";
import { useAuth } from "../contexts/ContextAuth";
import { useWishlist } from "../contexts/WishlistContext";
import { getOrders } from "../utils/orders";

function Account() {
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();
  const orders = getOrders();

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Your account</p><h1 className="mt-2 text-4xl font-bold">Welcome back</h1></div>
          <button onClick={() => void logout()} className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-white">Sign out</button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow"><p className="text-sm text-gray-500">Signed in as</p><p className="mt-2 break-all font-semibold">{user?.email}</p></div>
          <Link to="/orders" className="rounded-xl bg-white p-6 shadow hover:shadow-md"><p className="text-sm text-gray-500">Orders</p><p className="mt-2 text-2xl font-bold">{orders.length}</p></Link>
          <Link to="/wishlist" className="rounded-xl bg-white p-6 shadow hover:shadow-md"><p className="text-sm text-gray-500">Wishlist items</p><p className="mt-2 text-2xl font-bold">{wishlist.length}</p></Link>
        </div>
        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">Recent orders</h2>
          {orders.length ? <div className="mt-5 space-y-3">{orders.slice(0, 3).map((order) => <div key={order.id} className="flex flex-wrap justify-between gap-2 border-b pb-3"><span className="font-medium">{order.id}</span><span className="text-gray-500">{order.status} · ₹{order.total}</span></div>)}</div> : <p className="mt-4 text-gray-500">Your confirmed orders will appear here.</p>}
        </div>
      </div>
    </section>
  );
}

export default Account;