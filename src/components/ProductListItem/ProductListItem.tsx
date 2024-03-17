import NextImage from "next/image";
import Link from "next/link";

import { formatPrice } from "@/app/utils";
import type { ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="w-60">
			<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
				<Link href={`/product/${product.id}`}>
					{product.images[0] && (
						<NextImage
							alt={product.images[0].alt || product.name}
							className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
							height={300}
							src={product.images[0].url}
							width={300}
							sizes="(min-width: 640px) 300px, 50vw"
						/>
					)}
				</Link>
			</div>
			<div className="mt-2 flex items-center justify-between">
				<div>
					<Link href={`/product/${product.id}`}>
						<h3>{product.name}</h3>
					</Link>
					<p className="text-sm text-gray-500">
						<span className="sr-only">Category</span> {product.categories[0]?.name || "No category"}
					</p>
				</div>
				<p className="text-md font-medium text-gray-800">
					<span className="sr-only">Price:</span> {formatPrice(product.price)}
				</p>
			</div>
		</li>
	);
};

ProductListItem.displayName = "ProductListItem";
