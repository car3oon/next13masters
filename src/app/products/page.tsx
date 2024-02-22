import { getProductsList } from "@/app/api/products";
import { ProductList } from "@/ui/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList();
	return <ProductList products={products} />;
}
