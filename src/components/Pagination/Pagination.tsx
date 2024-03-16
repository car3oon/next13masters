"use client";
import type { Route } from "next";

import { PRODUCTS_PER_PAGE } from "@/app/constants";
import { ActiveLink } from "@/ui/ActiveLink";

type PaginationProps = {
	allProducts: number;
	slug: string;
	productsPerPage?: number;
};

export const Pagination = ({
	allProducts,
	slug,
	productsPerPage = PRODUCTS_PER_PAGE,
}: PaginationProps) => {
	const totalPages = Math.ceil(allProducts / productsPerPage);

	return (
		<nav className="mb-4 mt-8">
			<ul className="list-style-none flex justify-center" aria-label="pagination">
				{Array.from({ length: totalPages }, (_, index) => (
					<li key={index}>
						<ActiveLink
							exact
							activeClassName="border-slate-400 bg-slate-100"
							className="mx-1 rounded-md border border-slate-300 px-3 py-2 hover:bg-slate-200"
							href={`/${slug}/${index + 1}` as Route}
						>
							{String(index + 1)}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

Pagination.displayName = "Pagination";
