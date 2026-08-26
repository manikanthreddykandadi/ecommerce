import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

// -----------------------------
// Cart Item
// -----------------------------
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// -----------------------------
// Product added to cart
// -----------------------------
type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// -----------------------------
// Cart Context Type
// -----------------------------
type CartContextType = {
  cartItems: CartItem[];

  addToCart: (product: CartProduct) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  removeItem: (id: number) => void;
};

// -----------------------------
// Create Context
// -----------------------------
const CartContext = createContext<CartContextType | null>(null);

// -----------------------------
// Cart Provider
// -----------------------------
export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  // Get cart from localStorage when application starts
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });


  // -----------------------------
  // Save cart to localStorage
  // -----------------------------
  function saveCart(items: CartItem[]) {

    localStorage.setItem(
      "cart",
      JSON.stringify(items)
    );

  }


  // -----------------------------
  // ADD TO CART
  // -----------------------------
  function addToCart(product: CartProduct) {

    setCartItems((items) => {

      const existingItem = items.find(
        (item) => item.id === product.id
      );


      // Product already exists
      if (existingItem) {

        const updatedItems = items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

        saveCart(updatedItems);

        return updatedItems;
      }


      // New product
      const updatedItems = [
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ];

      saveCart(updatedItems);

      return updatedItems;

    });
  }


  // -----------------------------
  // INCREASE QUANTITY
  // -----------------------------
  function increaseQuantity(id: number) {

    setCartItems((items) => {

      const updatedItems = items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      saveCart(updatedItems);

      return updatedItems;

    });
  }


  // -----------------------------
  // DECREASE QUANTITY
  // -----------------------------
  function decreaseQuantity(id: number) {

    setCartItems((items) => {

      const updatedItems = items.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );

      saveCart(updatedItems);

      return updatedItems;

    });
  }


  // -----------------------------
  // REMOVE ITEM
  // -----------------------------
  function removeItem(id: number) {

    setCartItems((items) => {

      const updatedItems = items.filter(
        (item) => item.id !== id
      );

      saveCart(updatedItems);

      return updatedItems;

    });
  }


  // -----------------------------
  // Provider
  // -----------------------------
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


// -----------------------------
// Custom Hook
// -----------------------------
export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}