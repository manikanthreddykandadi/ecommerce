function ProductFilters() {
  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow
      p-6
      mb-8
      "
    >


      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        "
      >


        {/* Search */}

        <div>

          <label
            className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
            "
          >
            Search Products
          </label>


          <input
            type="text"
            placeholder="Search..."
            className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-2
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "
          />

        </div>




        {/* Category */}

        <div>

          <label
            className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
            "
          >
            Category
          </label>


          <select
            className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-2
            "
          >

            <option>
              All Categories
            </option>

            <option>
              Electronics
            </option>

            <option>
              Fashion
            </option>

            <option>
              Shoes
            </option>

            <option>
              Home
            </option>


          </select>

        </div>





        {/* Sort */}

        <div>

          <label
            className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
            "
          >
            Sort By
          </label>



          <select
            className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-2
            "
          >

            <option>
              Latest
            </option>


            <option>
              Price Low To High
            </option>


            <option>
              Price High To Low
            </option>


          </select>


        </div>


      </div>


    </div>
  );
}


export default ProductFilters;