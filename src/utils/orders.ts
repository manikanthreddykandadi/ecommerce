import type { Order } from "../types/Order";

const STORAGE_KEY = "orders";

export function getOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Order[];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([order, ...getOrders()]));
}