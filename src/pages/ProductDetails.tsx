import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Premium Running Shoes",
    image: "https://picsum.photos/600/600?1",
    category: "Shoes",
    price: 2999,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Classic Black Watch",
    image: "https://picsum.photos/600/600?2",
    category: "Watch",
    price: 4999,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Leather Backpack",
    image: "https://picsum.photos/600/600?3",
    category: "Bags",
    price: 1999,
    rating: 4.5,
  },
  {
    id: 4,
    title: "Wireless Headphones",
    image: "https://picsum.photos/600/600?4",
    category: "Electronics",
    price: 3499,
    rating: 4.7,
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="text-blue-600 hover:underline"
        >
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Product Image */}

        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-xl shadow"
          />
        </div>

        {/* Product Details */}

        <div>

          <p className="text-blue-600 font-semibold">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.title}
          </h1>

          <p className="text-yellow-500 mt-4">
            ⭐ {product.rating}
          </p>

          <h2 className="text-3xl font-bold text-blue-600 mt-6">
            ₹{product.price}
          </h2>

          <p className="text-gray-600 mt-6">
            This is a premium quality product with modern
            design, excellent build quality, and comfortable
            everyday use.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Add to Cart
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
              ❤️ Wishlist
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;