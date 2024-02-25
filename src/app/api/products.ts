import { PRODUCTS_PER_PAGE } from "@/app/constants";
import type { IProduct } from "@/app/types";

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
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await response.json()) as IProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProduct);

	return products;
};

export const getProductsListPaginated = async (page: string) => {
	const productsPerPage = PRODUCTS_PER_PAGE;
	const pageNumber = Number(page) - 1;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${productsPerPage}&offset=${pageNumber}`,
	);
	const productsResponse = (await res.json()) as IProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProduct);

	return products;
};

export const getProductById = async (productId: IProductResponseItem["id"]) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const productResponse = (await response.json()) as IProductResponseItem;

	return productResponseItemToProduct(productResponse);
};
