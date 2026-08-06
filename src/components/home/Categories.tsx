const categories = [
  {
    id: 1,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
  {
    id: 2,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400",
  },
  {
    id: 3,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    id: 4,
    name: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
  },
  {
    id: 5,
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
  },
  {
    id: 6,
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-3">
            Browse products from your favourite categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (

            <div
              key={category.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group"
            >

              <img
                src={category.image}
                alt={category.name}
                className="w-full h-36 object-cover group-hover:scale-110 transition duration-300"
              />

              <div className="p-4">

                <h3 className="text-center font-semibold text-gray-800">
                  {category.name}
                </h3>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}