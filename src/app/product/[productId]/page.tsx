import type { Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";
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

	if (!product) {
		throw notFound();
	}

	return {
		title: `${product.name} - Our Store`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Our Store`,
			description: product.description,
			images: product.images[0] && [product.images[0].url],
		},
	};
};

export default async function ProductDetailsPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}

	return (
		<div>
			<h1 className="mb-6 text-3xl font-bold">{product.name}</h1>
			<div className="mb-6 flex flex-row gap-6">
				{product.images[0] && (
					<NextImage
						alt={product.images[0].alt || product.name}
						className="max-w-4xl object-cover object-center p-4"
						height={300}
						src={product.images[0].url}
						width={300}
						sizes="(min-width: 640px) 300px, 50vw"
					/>
				)}
				<div>
					<p className="mt-4 text-lg">{product.description}</p>
					<p className="mt-4 text-gray-500">
						<span className="sr-only">Category</span>{" "}
						{product.categories[0] ? product.categories[0].name : "No category"}
					</p>
					<p className="mt-4 font-medium text-gray-800">
						<span className="sr-only">Price:</span> {formatPrice(product.price)}
					</p>
				</div>
			</div>
			<aside>
				{product.categories[0] && (
					<Suspense fallback="loading...">
						<SuggestedProducts category={product.categories[0].slug} />
					</Suspense>
				)}
			</aside>
		</div>
	);
}
