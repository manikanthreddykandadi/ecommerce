import { useState } from "react";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";


function Cart() {


  const [cartItems, setCartItems] = useState([
    {
      product: {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        image: "https://via.placeholder.com/300",
        price: 120,
      },
      quantity: 2,
    },

    {
      product: {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        image: "https://via.placeholder.com/300",
        price: 199,
      },
      quantity: 1,
    },
  ]);




  // Increase quantity

  function increaseQuantity(id: number) {

    setCartItems((items) =>
      items.map((item) =>
        item.product.id === id
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );

  }




  // Decrease quantity

  function decreaseQuantity(id: number) {

    setCartItems((items) =>
      items.map((item) =>
        item.product.id === id && item.quantity > 1
          ? {
            ...item,
            quantity: item.quantity - 1,
          }
          : item
      )
    );

  }





  // Remove item

  function removeItem(id: number) {

    setCartItems((items) =>
      items.filter(
        (item) => item.product.id !== id
      )
    );

  }





  // Calculate subtotal

  // const subtotal = cartItems.reduce(
  //   (total, item) =>
  //     total + item.product.price * item.quantity,
  //   0
  // );

  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotal = subtotal + cartItems[i].product.price * cartItems[i].quantity;
  }




  return (

    <section className="
      max-w-7xl
      mx-auto
      px-6
      py-10
    ">


      <h1 className="
        text-4xl
        font-bold
        mb-8
      ">
        Shopping Cart
      </h1>




      <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
      ">



        {/* Cart Products */}

        <div className="
          lg:col-span-2
          space-y-5
        ">



          {cartItems.map((item) => (

            <CartItem

              key={item.product.id}

              product={item.product}

              quantity={item.quantity}


              onIncrease={() =>
                increaseQuantity(item.product.id)
              }


              onDecrease={() =>
                decreaseQuantity(item.product.id)
              }


              onRemove={() =>
                removeItem(item.product.id)
              }

            />

          ))}



        </div>





        {/* Cart Summary */}

        <CartSummary
          subtotal={subtotal}
        />



      </div>


    </section>

  );
}


export default Cart;