import type { ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/ProductListItem";

type ProductListProps = {
	products: ProductListItemFragment[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="flex flex-wrap items-start justify-center gap-8" data-testid="products-list">
			{products.map((product: ProductListItemFragment) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

ProductList.displayName = "ProductList";
