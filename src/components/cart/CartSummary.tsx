import Card from "../ui/Card";
import { Link } from "react-router-dom";


type CartSummaryProps = {
  subtotal: number;
};


function CartSummary({
  subtotal,
}: CartSummaryProps) {


  const shipping = subtotal > 0 ? 10 : 0;


  const discount = subtotal > 500
    ? 50
    : 0;


  const total =
    subtotal + shipping - discount;



  return (

    <Card>


      <h2 className="
        text-2xl
        font-bold
        mb-6
      ">
        Cart Summary
      </h2>




      {/* Subtotal */}

      <div className="
        flex
        justify-between
        mb-3
      ">

        <span>
          Subtotal
        </span>

        <span>
          ${subtotal}
        </span>

      </div>




      {/* Shipping */}

      <div className="
        flex
        justify-between
        mb-3
      ">

        <span>
          Shipping
        </span>

        <span>
          ${shipping}
        </span>

      </div>





      {/* Discount */}

      <div className="
        flex
        justify-between
        mb-3
        text-green-600
      ">

        <span>
          Discount
        </span>

        <span>
          - ${discount}
        </span>

      </div>





      <hr className="my-5" />





      {/* Total */}

      <div className="
        flex
        justify-between
        text-xl
        font-bold
      ">


        <span>
          Total
        </span>


        <span className="
          text-blue-600
        ">
          ${total}
        </span>


      </div>





      {/* Checkout Button */}

      <Link
        to="/checkout"
        className="
          block
          text-center
          mt-6
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-lg
          font-semibold
          transition
        "
      >
        Proceed To Checkout
      </Link>



    </Card>

  );
}


export default CartSummary;