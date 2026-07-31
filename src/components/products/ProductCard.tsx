import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";


interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  rating: number;
}


function ProductCard({
  id,
  title,
  image,
  category,
  price,
  rating,
}: ProductCardProps) {

  return (
    <div className="
      group
      overflow-hidden
      rounded-xl
      bg-white
      shadow-md
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
    ">

      {/* Product Image */}

      <Link to={`/product/${id}`}>

        <div className="overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
              h-64
              w-full
              object-cover
              transition
              duration-300
              group-hover:scale-110
            "
          />

        </div>

      </Link>


      {/* Product Details */}

      <div className="p-5">


        <p className="
          text-sm
          uppercase
          text-blue-600
          font-medium
        ">
          {category}
        </p>



        <h3 className="
          mt-2
          text-lg
          font-semibold
          text-gray-900
        ">
          {title}
        </h3>



        <div className="
          mt-3
          flex
          items-center
          gap-2
        ">

          <span className="text-yellow-500">
            ★
          </span>

          <span className="text-gray-600">
            {rating}
          </span>

        </div>



        <div className="
          mt-5
          flex
          items-center
          justify-between
        ">


          <p className="
            text-xl
            font-bold
          ">
            ₹{price}
          </p>



          <button
            className="
              rounded-full
              bg-blue-600
              p-3
              text-white
              transition
              hover:bg-blue-700
            "
          >

            <ShoppingCart size={20}/>

          </button>


        </div>


      </div>


    </div>
  );
}


export default ProductCard;