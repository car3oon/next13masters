import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsList } from "@/app/api/products";
import { getPaginatedProductsList } from "@/app/utils";
import { Pagination } from "@/ui/Pagination";
import { ProductList } from "@/ui/ProductList";

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

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsList();

	if (!products) {
		throw notFound();
	}

	const paginatedProducts = await getPaginatedProductsList(products, params.pageNumber, 4);

	return (
		<>
			<h1 className="mb-4 text-2xl font-bold">Products</h1>
			<ProductList products={paginatedProducts} />
			<Pagination allProducts={products.length} slug="products" productsPerPage={4} />
		</>
	);
}
