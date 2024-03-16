import { notFound } from "next/navigation";

import { getProductsByCategorySlug } from "@/app/api/products";
import { ProductList } from "@/components";

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const response = await getProductsByCategorySlug(params.category);

	if (!response?.products) {
		throw notFound();
	}

	return (
		<>
			<h1 className="mb-3 text-2xl font-bold">
				Products from category: {params.category}, page {params.pageNumber}
			</h1>
			<ProductList products={response.products} />
		</>
	);
}
