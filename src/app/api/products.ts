import { PRODUCTS_PER_PAGE } from "@/app/constants";
import type { IProduct } from "@/app/types";
import {
	ProductGetDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	type ProductListItemFragment,
} from "@/gql/graphql";

import { executeGraphql } from "./lib";

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
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.data;
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

export const getProductById = async (productId: ProductListItemFragment["id"]) => {
	const response = await executeGraphql(ProductGetDocument, {
		id: productId,
	});

	return response.product;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});

	return graphqlResponse.category?.products;
};
