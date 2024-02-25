import Image from "next/image";
import Link from "next/link";

import type { IProduct } from "@/app/types";
import { formatPrice } from "@/app/utils";

type ProductListItemProps = {
	product: IProduct;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="w-60">
			<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
				<Link href={`/product/${product.id}`}>
					<Image
						alt={product.coverImage.alt}
						className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
						height={300}
						src={product.coverImage.src}
						width={300}
					/>
				</Link>
			</div>
			<div className="mt-2 flex items-center justify-between">
				<div>
					<Link href={`/product/${product.id}`}>
						<h3>{product.name}</h3>
					</Link>
					<p className="text-sm text-gray-500">
						<span className="sr-only">Category</span> {product.category}
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
