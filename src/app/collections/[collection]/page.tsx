import { notFound } from "next/navigation";

import { getProductsByCollectionSlug } from "@/app/api/products";
import { ProductList } from "@/components";

export default async function CollectionPage({ params }: { params: { collection: string } }) {
	const response = await getProductsByCollectionSlug(params.collection);

	if (!response?.products) {
		throw notFound();
	}

	return (
		<>
			<h1 className="mb-3 text-2xl font-bold">Products from collection {response.name}</h1>
			<ProductList products={response.products} />
		</>
	);
}
