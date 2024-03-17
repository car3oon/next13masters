import Link from "next/link";

import type { CategoriesGetListQuery } from "@/gql/graphql";

export const CategoryList = ({
	categories,
}: {
	categories: CategoriesGetListQuery["categories"]["data"];
}) => {
	return (
		<div>
			<h1 className="mb-4 text-2xl font-bold">Categories</h1>
			<ul className="flex flex-wrap items-start justify-center gap-8">
				{categories.map((category) => (
					<li
						className="rounded-md border bg-slate-50 px-10 py-5 hover:bg-slate-100"
						key={category.id}
					>
						<Link className="hover:underline" href={{ pathname: `/categories/${category?.slug}` }}>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

CategoryList.displayName = "CategoryList";
