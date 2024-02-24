import type { IProduct } from "../types";

type IProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const productResponseItemToProduct = (product: IProductResponseItem): IProduct => {
	return {
		id: product.id,
		name: product.title,
		price: product.price,
		category: product.category,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
};

export const getProductsList = async () => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products ");
	const productsResponse = (await response.json()) as IProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProduct);

	return products;
};

export const getProductById = async (productId: IProductResponseItem["id"]) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const productResponse = (await response.json()) as IProductResponseItem;

	return productResponseItemToProduct(productResponse);
};
