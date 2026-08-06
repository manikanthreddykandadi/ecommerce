import Card from "../ui/Card";


type CartItemProps = {
  product: {
    id: number;
    name: string;
    category: string;
    image: string;
    price: number;
  };

  quantity: number;

  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};


function CartItem({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {


  return (
    <Card>

      <div className="flex items-center gap-5">


        {/* Image */}

        <img
          src={product.image}
          alt={product.name}
          className="
            w-24
            h-24
            rounded-lg
            object-cover
          "
        />



        {/* Product Details */}

        <div className="flex-1">

          <h2 className="text-xl font-bold">
            {product.name}
          </h2>


          <p className="text-gray-500">
            {product.category}
          </p>


          <p className="text-blue-600 font-bold">
            ${product.price}
          </p>


        </div>



        {/* Quantity Buttons */}

        <div className="flex items-center gap-3">


          <button
            onClick={onDecrease}
            className="
              bg-gray-200
              px-3
              py-1
              rounded
            "
          >
            -
          </button>


          <span className="font-bold">
            {quantity}
          </span>


          <button
            onClick={onIncrease}
            className="
              bg-gray-200
              px-3
              py-1
              rounded
            "
          >
            +
          </button>


        </div>



        {/* Remove */}

        <button
          onClick={onRemove}
          className="
            text-red-500
            hover:text-red-700
          "
        >
          Remove
        </button>


      </div>


    </Card>
  );
}


export default CartItem;