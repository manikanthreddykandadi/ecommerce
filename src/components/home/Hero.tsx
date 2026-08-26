import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2">

        {/* Left Content */}
        <div>

          <p className="mb-6 text-xl font-semibold tracking-wide text-blue-600">
            Mani Mani Mani Mani Mani Mani Mani Mani Mani Mani Mani Mani Mani Mani Mani Mani 
          </p>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
            Discover Amazing
            <br />
            Products
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Shop the latest fashion, electronics, accessories, and lifestyle
            products with exciting offers and fast delivery.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-5">

            {/* Shop Now */}
            <Link
              to="/products"
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now
            </Link>

            {/* Explore */}
            <Link
              to="/products"
              className="rounded-lg border border-gray-500 bg-white px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Explore
            </Link>

          </div>

        </div>

        {/* Right Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Smart Watch"
            className="h-[470px] w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}