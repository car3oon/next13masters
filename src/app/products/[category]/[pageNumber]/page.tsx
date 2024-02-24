export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "shoes") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const { category, pageNumber } = params;

	return (
		<div>
			<h1>
				Products from category {category} page {pageNumber}
			</h1>
		</div>
	);
}
