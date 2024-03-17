import Link from "next/link";

import type { CollectionsGetListQuery } from "@/gql/graphql";

export const CollectionList = ({
	collections,
}: {
	collections: CollectionsGetListQuery["collections"]["data"];
}) => {
	return (
		<div>
			<h1 className="mb-4 text-2xl font-bold">Collections</h1>
			<ul className="flex flex-wrap items-start justify-center gap-8">
				{collections.map((collection) => (
					<li
						className="rounded-md border bg-slate-50 px-10 py-5 hover:bg-slate-100"
						key={collection.id}
					>
						<Link
							className="hover:underline"
							href={{ pathname: `/collections/${collection?.slug}` }}
						>
							{collection.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

CollectionList.displayName = "CollectionList";
