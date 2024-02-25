"use client";
import type { Route } from "next";

import { PRODUCTS_PER_PAGE } from "@/app/constants";
import { ActiveLink } from "@/ui/ActiveLink";

type PaginationProps = {
	productsCount: number;
};

export const Pagination = ({ productsCount }: PaginationProps) => {
	const productsPerPage = PRODUCTS_PER_PAGE;
	const totalPages = Math.ceil(productsCount / productsPerPage);

	return (
		<nav className="my-4">
			<ul className="list-style-none flex justify-center" aria-label="pagination">
				{Array.from({ length: totalPages }, (_, index) => (
					<li key={index}>
						<ActiveLink
							className="mx-1 rounded-md border border-slate-300 p-2 hover:bg-slate-100"
							href={`/products/${index + 1}` as Route}
						>
							{index + 1}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
