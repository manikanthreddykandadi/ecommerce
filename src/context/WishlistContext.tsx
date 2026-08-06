import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface WishlistProduct {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  rating: number;
}

interface WishlistContextType {
  wishlistItems: WishlistProduct[];

  addToWishlist: (product: WishlistProduct) => void;

  removeFromWishlist: (id: number) => void;

  isInWishlist: (id: number) => boolean;

  clearWishlist: () => void;
}

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlistItems, setWishlistItems] = useState<
    WishlistProduct[]
  >([]);

  function addToWishlist(product: WishlistProduct) {
    setWishlistItems((items) => {
      const exists = items.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return items;
      }

      return [...items, product];
    });
  }

  function removeFromWishlist(id: number) {
    setWishlistItems((items) =>
      items.filter((item) => item.id !== id)
    );
  }

  function isInWishlist(id: number) {
    return wishlistItems.some(
      (item) => item.id === id
    );
  }

  function clearWishlist() {
    setWishlistItems([]);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}