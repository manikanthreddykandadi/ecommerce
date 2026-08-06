export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  isLatest?: boolean;
}