import Image from "next/image";
import type { IProduct } from "@/app/types";

type ProductListItemProps = {
	product: IProduct;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="w-60">
			<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
				<Image
					alt={product.coverImage.alt}
					className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
					height={300}
					src={product.coverImage.src}
					width={300}
				/>
			</div>
			<div className="mt-2 flex justify-between">
				<div>
					<h3>{product.name}</h3>
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria</span> {product.category}
					</p>
					<p className="text-sm font-medium text-gray-800">
						<span className="sr-only">Cena:</span> {product.price}
					</p>
				</div>
			</div>
		</li>
	);
};

ProductListItem.displayName = "ProductListItem";
