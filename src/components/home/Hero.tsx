export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">

            <p className="text-blue-600 font-semibold uppercase tracking-wider">
              New Collection 2026
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 leading-tight">
              Discover Amazing Products
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Shop the latest fashion, electronics, accessories, and lifestyle
              products with exciting offers and fast delivery.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Shop Now
              </button>

              <button className="border border-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition">
                Explore
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
              alt="Shopping"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />

          </div>

        </div>
      </div>
    </section>
  );
}