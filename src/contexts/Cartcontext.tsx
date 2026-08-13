import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (product: CartProduct) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  removeItem: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ADD TO CART
  function addToCart(product: CartProduct) {
    setCartItems((items) => {
      const existingItem = items.find(
        (item) => item.id === product.id
      );

      // Product already exists
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

      // New product
      return [
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  // INCREASE QUANTITY
  function increaseQuantity(id: number) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // DECREASE QUANTITY
  function decreaseQuantity(id: number) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  }

  // REMOVE ITEM
  function removeItem(id: number) {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  }

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

// CUSTOM HOOK
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}

