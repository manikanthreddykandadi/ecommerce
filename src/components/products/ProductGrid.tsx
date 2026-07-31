import ProductCard from "./ProductCard";


interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  rating: number;
}


const products: Product[] = [
  {
    id: 1,
    title: "Premium Running Shoes",
    image: "https://picsum.photos/400/400?1",
    category: "Shoes",
    price: 2999,
    rating: 4.8,
  },

  {
    id: 2,
    title: "Classic Black Watch",
    image: "https://picsum.photos/400/400?2",
    category: "Watch",
    price: 4999,
    rating: 4.6,
  },

  {
    id: 3,
    title: "Leather Backpack",
    image: "https://picsum.photos/400/400?3",
    category: "Bags",
    price: 1999,
    rating: 4.5,
  },

  {
    id: 4,
    title: "Wireless Headphones",
    image: "https://picsum.photos/400/400?4",
    category: "Electronics",
    price: 3499,
    rating: 4.7,
  },
];



function ProductGrid() {

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >

      {
        products.map((product) => (

          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            category={product.category}
            price={product.price}
            rating={product.rating}
          />

        ))
      }

    </div>
  );
}


export default ProductGrid;