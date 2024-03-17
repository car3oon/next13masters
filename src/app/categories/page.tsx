import { notFound } from "next/navigation";

import { executeGraphql } from "@/app/api/lib";
import { CategoriesGetListDocument } from "@/gql/graphql";
import { CategoryList } from "@/ui/categories/CategoryList";

export default async function CategoriesPage() {
	const response = await executeGraphql(CategoriesGetListDocument, {});

	if (!response.categories) {
		throw notFound();
	}

	return (
		<>
			<CategoryList categories={response.categories.data} />
		</>
	);
}
