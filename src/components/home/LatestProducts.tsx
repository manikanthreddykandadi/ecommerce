const latestProducts = [
  {
    id: 1,
    name: "Laptop",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },

  {
    id: 2,
    name: "Smart Phone",
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },

  {
    id: 3,
    name: "Backpack",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },

  {
    id: 4,
    name: "Sunglasses",
    price: "$40",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
];


function LatestProducts() {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-10">

          <h2
            className="
            text-3xl
            font-bold
            text-gray-900
            "
          >
            Latest Products
          </h2>


          <p
            className="
            mt-3
            text-gray-600
            "
          >
            Check out our newest arrivals
          </p>

        </div>




        {/* Products Grid */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >


          {latestProducts.map((product) => (

            <div
              key={product.id}
              className="
              bg-white
              rounded-xl
              shadow-md
              overflow-hidden
              hover:shadow-xl
              transition
              "
            >


              {/* Image Area */}

              <div className="relative">


                <img
                  src={product.image}
                  alt={product.name}
                  className="
                  w-full
                  h-56
                  object-cover
                  "
                />


                {/* New Badge */}

                <span
                  className="
                  absolute
                  top-3
                  left-3
                  bg-green-500
                  text-white
                  text-sm
                  px-3
                  py-1
                  rounded-full
                  "
                >
                  New
                </span>


              </div>




              {/* Product Info */}

              <div className="p-5">


                <h3
                  className="
                  text-lg
                  font-semibold
                  text-gray-800
                  "
                >
                  {product.name}
                </h3>



                <p
                  className="
                  text-blue-600
                  text-xl
                  font-bold
                  mt-3
                  "
                >
                  {product.price}
                </p>



                <button
                  className="
                  mt-4
                  w-full
                  bg-gray-900
                  text-white
                  py-2
                  rounded-lg
                  hover:bg-gray-700
                  transition
                  "
                >
                  Add To Cart
                </button>


              </div>



            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default LatestProducts;