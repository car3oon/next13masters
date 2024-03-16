import { PRODUCTS_PER_PAGE } from "@/app/constants";
import type { ProductListItemFragment } from "@/gql/graphql";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const getPaginatedProductsList = async (
	allProducts: Array<ProductListItemFragment>,
	pageNumber: string = "1",
	productsPerPage: number = PRODUCTS_PER_PAGE,
) => {
	const paginatedProducts = allProducts.slice(
		(Number(pageNumber) - 1) * productsPerPage,
		Number(pageNumber) * productsPerPage,
	);

	return paginatedProducts;
};
