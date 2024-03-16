import { notFound } from "next/navigation";

import { executeGraphql } from "@/app/api/lib";
import { CollectionsGetListDocument } from "@/gql/graphql";
import { CollectionList } from "@/ui/collections/CollectionList";

export default async function CollectionsPage() {
	const response = await executeGraphql(CollectionsGetListDocument, {});

	if (!response.collections) {
		throw notFound();
	}

	return (
		<>
			<CollectionList collections={response.collections.data} />
		</>
	);
}
