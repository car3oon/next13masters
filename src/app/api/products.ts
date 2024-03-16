import {
	ProductGetDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetListDocument,
	type ProductListItemFragment,
} from "@/gql/graphql";

import { executeGraphql } from "./lib";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.data;
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

	return graphqlResponse.category;
};

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCollectionSlugDocument, {
		slug: collectionSlug,
	});

	return graphqlResponse.collection;
};
