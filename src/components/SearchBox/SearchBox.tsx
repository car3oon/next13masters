"use client";
import type { Route } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounceCallback } from "usehooks-ts";

export const SearchBox = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const defaultQuery = searchParams.get("query") ?? "";
	const handleSearch = (query: string) => {
		const sp = new URLSearchParams(searchParams);

		if (query.length > 1) {
			if (query.trim() === "") {
				sp.delete("query");
			} else {
				sp.set("query", query);
			}
		}

		router.replace(`/search?${sp.toString()}` as Route);
	};
	const debouncedSearch = useDebounceCallback(handleSearch, 500);

	return (
		<div className="w-[100%]">
			<input
				className="w-[100%] rounded-md border border-slate-300 px-3 py-2 text-slate-500"
				type="search"
				placeholder="Search"
				onChange={(e) => {
					debouncedSearch(e.target.value);
				}}
				defaultValue={defaultQuery}
			/>
		</div>
	);
};
