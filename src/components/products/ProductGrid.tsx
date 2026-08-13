import { products } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          oldPrice={product.oldPrice}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  );
}