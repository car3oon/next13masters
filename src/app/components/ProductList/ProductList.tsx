import type { IProduct } from "@/app/types";
import { ProductListItem } from "@/ui/ProductListItem";

type ProductListProps = {
	products: IProduct[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="flex flex-wrap items-center justify-center gap-8" data-testid="products-list">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

ProductList.displayName = "ProductList";
