import { useState } from "react";


function ProductFilters() {

  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(5000);
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");


  const clearFilters = () => {
    setCategory("All");
    setPrice(5000);
    setRating(0);
    setSearch("");
    setSort("default");
  };


  return (

    <div
      className="
      rounded-xl
      bg-white
      p-6
      shadow-md
      "
    >

      <h2
        className="
        mb-6
        text-xl
        font-bold
        "
      >
        Filters
      </h2>



      {/* Search */}

      <div className="mb-5">

        <label
          className="
          mb-2
          block
          text-sm
          font-medium
          "
        >
          Search
        </label>


        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-2
          outline-none
          focus:border-blue-500
          "
        />

      </div>



      {/* Category */}

      <div className="mb-5">

        <label
          className="
          mb-2
          block
          text-sm
          font-medium
          "
        >
          Category
        </label>


        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-2
          "
        >

          <option value="All">
            All
          </option>

          <option value="Shoes">
            Shoes
          </option>

          <option value="Watch">
            Watches
          </option>

          <option value="Bags">
            Bags
          </option>

          <option value="Electronics">
            Electronics
          </option>


        </select>

      </div>




      {/* Price */}

      <div className="mb-5">


        <label
          className="
          mb-2
          block
          text-sm
          font-medium
          "
        >
          Price: ₹{price}
        </label>


        <input
          type="range"
          min="0"
          max="10000"
          value={price}
          onChange={(e)=>setPrice(Number(e.target.value))}
          className="
          w-full
          "
        />


      </div>




      {/* Rating */}

      <div className="mb-5">

        <label
          className="
          mb-2
          block
          text-sm
          font-medium
          "
        >
          Rating
        </label>


        <select

          value={rating}

          onChange={(e)=>setRating(Number(e.target.value))}

          className="
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-2
          "
        >

          <option value="0">
            All Ratings
          </option>


          <option value="4">
            ⭐ 4 & Above
          </option>


          <option value="3">
            ⭐ 3 & Above
          </option>


        </select>


      </div>




      {/* Sort */}

      <div className="mb-6">


        <label
          className="
          mb-2
          block
          text-sm
          font-medium
          "
        >
          Sort By
        </label>


        <select

          value={sort}

          onChange={(e)=>setSort(e.target.value)}

          className="
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-2
          "
        >

          <option value="default">
            Default
          </option>


          <option value="low">
            Price Low to High
          </option>


          <option value="high">
            Price High to Low
          </option>


        </select>


      </div>




      {/* Clear Button */}

      <button

        onClick={clearFilters}

        className="
        w-full
        rounded-lg
        bg-red-500
        py-3
        font-semibold
        text-white
        transition
        hover:bg-red-600
        "

      >

        Clear Filters

      </button>


    </div>

  );
}


export default ProductFilters;