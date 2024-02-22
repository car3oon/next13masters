export default function ProductDetailsPage({ params }: { params: { productId: string } }) {
	return (
		<div>
			<h1>ProductDetailsPage</h1>
			<div>{params.productId}</div>
		</div>
	);
}
