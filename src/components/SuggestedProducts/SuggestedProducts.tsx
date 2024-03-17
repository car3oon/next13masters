import { notFound } from "next/navigation";

import { getProductsByCategorySlug } from "@/app/api/products";
import { ProductList } from "@/ui/ProductList";

type SuggestedProductsProps = {
	category: string;
};

export const SuggestedProducts = async ({ category }: SuggestedProductsProps) => {
	const response = await getProductsByCategorySlug(category);

	if (!response?.products) {
		throw notFound();
	}

	return (
		<div data-testid="related-products">
			<h2 className="mb-5 text-xl font-bold">Suggested products:</h2>
			<ProductList products={response?.products.slice(-4)} />;
		</div>
	);
};

SuggestedProducts.displayName = "SuggestedProducts";
