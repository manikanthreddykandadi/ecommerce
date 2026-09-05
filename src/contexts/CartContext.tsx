/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

// -----------------------------
// Cart Item
// -----------------------------
export type CartItem = {
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
  itemCount: number;
  subtotal: number;

  addToCart: (product: CartProduct) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  removeItem: (id: number) => void;
  clearCart: () => void;
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
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product: CartProduct) {
    setCartItems((items) => {
      const existingItem = items.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }


  // -----------------------------
  // INCREASE QUANTITY
  // -----------------------------
  function increaseQuantity(id: number) {

    setCartItems((items) => {

      return items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    });
  }


  // -----------------------------
  // DECREASE QUANTITY
  // -----------------------------
  function decreaseQuantity(id: number) {

    setCartItems((items) => {

      return items
        .map((item) =>
          item.id === id && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  }


  // -----------------------------
  // REMOVE ITEM
  // -----------------------------
  function removeItem(id: number) {

    setCartItems((items) => {

      return items.filter(
        (item) => item.id !== id
      );
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  // -----------------------------
  // Provider
  // -----------------------------
  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        subtotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
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