import type { Metadata } from "next";
import { Suspense } from "react";

import { getProductById } from "@/app/api/products";
import { SuggestedProducts } from "@/ui/SuggestedProducts";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} - Our Store`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Our Store`,
			description: product.description,
			images: [product.coverImage.src],
		},
	};
};

export default async function ProductDetailsPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<div>
			<h1>{product.name}</h1>
			<div>{product.id}</div>
			<aside>
				<Suspense fallback="loading...">
					<SuggestedProducts />
				</Suspense>
			</aside>
		</div>
	);
}
