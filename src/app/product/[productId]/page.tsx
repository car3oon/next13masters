import type { Metadata } from "next";
import NextImage from "next/image";
import { Suspense } from "react";

import { getProductById } from "@/app/api/products";
import { formatPrice } from "@/app/utils";
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
			<h1 className="mb-6 text-3xl font-bold">{product.name}</h1>
			<div className="mb-6 flex flex-row gap-6">
				<NextImage
					alt={product.coverImage.alt}
					className="max-w-4xl object-cover object-center p-4"
					height={300}
					src={product.coverImage.src}
					width={300}
					sizes="(min-width: 640px) 300px, 50vw"
				/>
				<div>
					<p className="mt-4 text-lg">{product.description}</p>
					<p className="mt-4 text-gray-500">
						<span className="sr-only">Category</span> {product.category}
					</p>
					<p className="mt-4 font-medium text-gray-800">
						<span className="sr-only">Price:</span> {formatPrice(product.price)}
					</p>
				</div>
			</div>
			<aside>
				<Suspense fallback="loading...">
					<SuggestedProducts />
				</Suspense>
			</aside>
		</div>
	);
}
