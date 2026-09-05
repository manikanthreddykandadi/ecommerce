import { getOrders } from "../utils/orders";

function Orders() {
  const orders = getOrders();
  return <section className="min-h-screen bg-gray-50 px-6 py-12"><div className="mx-auto max-w-5xl"><h1 className="text-4xl font-bold">Your Orders</h1>{orders.length ? <div className="mt-8 space-y-5">{orders.map((order) => <article key={order.id} className="rounded-xl bg-white p-6 shadow"><div className="flex flex-wrap justify-between gap-3"><div><h2 className="font-bold">{order.id}</h2><p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</p></div><p className="font-semibold text-green-600">{order.status}</p></div><div className="mt-5 border-t pt-4 text-gray-600">{order.items.length} item(s) · Total ₹{order.total}</div></article>)}</div> : <p className="mt-8 rounded-xl bg-white p-8 text-gray-600 shadow">You have not placed an order yet.</p>}</div></section>;
}

export default Orders;