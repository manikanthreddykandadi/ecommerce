import { products as localProducts } from "../data/products";
import type { Product } from "../types/Product";

type DummyJsonProduct = {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	thumbnail: string;
};

const API_URL = "https://dummyjson.com/products?limit=100";

function mapApiProduct(product: DummyJsonProduct): Product {
	const price = Math.round(product.price * 84);

	return {
		id: product.id,
		name: product.title,
		image: product.thumbnail,
		category: product.category,
		description: product.description,
		price,
		oldPrice: Math.round(price / (1 - product.discountPercentage / 100)),
		rating: product.rating,
	};
}

export async function fetchProducts(): Promise<Product[]> {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) throw new Error("Unable to load products");
		const data = (await response.json()) as { products: DummyJsonProduct[] };
		return data.products.map(mapApiProduct);
	} catch {
		return localProducts;
	}
}

export async function fetchProduct(id: number): Promise<Product | undefined> {
	const products = await fetchProducts();
	return products.find((product) => product.id === id);
}
