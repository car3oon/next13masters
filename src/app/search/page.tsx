import { notFound } from "next/navigation";
import { Suspense } from "react";

import { getProductsBySearch } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export default async function SearchResultsPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const response = await getProductsBySearch(searchParams.query);

	if (!response) {
		throw notFound();
	}

	return (
		<>
			<h1 className="mb-4 text-2xl font-bold">Search results for: {searchParams.query}</h1>
			<Suspense fallback={<div className="m-10 w-full text-center">Searching products...</div>}>
				{searchParams.query.length > 1 && response.length > 1 ? (
					<ProductList products={response} />
				) : (
					<div className="m-10 w-full text-center">No products found</div>
				)}
			</Suspense>
		</>
	);
}
