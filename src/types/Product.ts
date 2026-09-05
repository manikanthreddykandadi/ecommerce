
export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  price: number;
  oldPrice: number;
  rating: number;
  isLatest?: boolean;
}
