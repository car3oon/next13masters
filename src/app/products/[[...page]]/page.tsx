import type { Metadata } from "next";

import { getProductsListPaginated } from "@/app/api/products";
import { Pagination } from "@/app/components/Pagination";
import { PRODUCTS_COUNT, PRODUCTS_PER_PAGE } from "@/app/constants";
import { ProductList } from "@/ui/ProductList";

export const generateStaticParams = async () => {
	const totalProductsPages = Math.ceil(PRODUCTS_COUNT / PRODUCTS_PER_PAGE);

	return Array.from({ length: totalProductsPages }, (_, index) => ({
		page: [`${index + 1}`],
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { page: string };
}): Promise<Metadata> => {
	return {
		title: `Products - page ${params.page} - Our Store`,
		description: "Products list",
	};
};

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const products = await getProductsListPaginated(params.page);

	return (
		<>
			<ProductList products={products} />
			<Pagination productsCount={PRODUCTS_COUNT} />
		</>
	);
}
