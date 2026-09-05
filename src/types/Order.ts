import type { CartItem } from "../contexts/CartContext";

export type Order = {
  id: string;
  createdAt: string;
  status: "Confirmed";
  paymentMethod: string;
  total: number;
  items: CartItem[];
  customer: {
    name: string;
    email: string;
    address: string;
  };
};