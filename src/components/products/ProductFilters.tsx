type ProductFiltersProps = {
  search: string;
  category: string;
  sort: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

function ProductFilters({ search, category, sort, categories, onSearchChange, onCategoryChange, onSortChange }: ProductFiltersProps) {
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
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
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
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-2
            "
          >

            <option value="all">All Categories</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}


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
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-2
            "
          >

            <option value="latest">Latest</option>
            <option value="price-asc">Price Low To High</option>
            <option value="price-desc">Price High To Low</option>


          </select>


        </div>


      </div>


    </div>
  );
}


export default ProductFilters;