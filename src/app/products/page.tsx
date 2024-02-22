import type { IProduct } from "@/app/types";
import { ProductList } from "@/ui/ProductList";

const products: IProduct[] = [
	{
		id: 1,
		category: "Accessories",
		name: "Cool Mug",
		price: 19.99,
		coverImage: {
			alt: "Cool Mug",
			src: "/mug.webp",
		},
	},
	{
		id: 2,
		category: "T-shirts",
		name: "Gray T-shirt",
		price: 24.99,
		coverImage: {
			alt: "Gray T-shirt",
			src: "/t-shirt.webp",
		},
	},
	{
		id: 3,
		category: "Hoodies",
		name: "Saleor Hoodie",
		price: 34.99,
		coverImage: {
			alt: "Saleor Hoodie",
			src: "/hoodie.webp",
		},
	},
	{
		id: 4,
		category: "Beanies",
		name: "Saleor Beanie",
		price: 14.99,
		coverImage: {
			alt: "Saleor Beanie",
			src: "/beanie.webp",
		},
	},
];

export default function ProductsPage() {
	return <ProductList products={products} />;
}
