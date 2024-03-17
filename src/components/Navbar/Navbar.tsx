import { Suspense } from "react";

import { ActiveLink } from "@/ui/ActiveLink";

import { SearchBox } from "../SearchBox";

export const Navbar = () => {
	const activeClasses = "text-orange-500 underline";

	return (
		<nav className="flex items-center justify-between bg-gray-800 px-10 py-4 text-white">
			<p className="text-2xl font-bold">My Shop</p>
			<div className="w-[40%]">
				<Suspense>
					<SearchBox />
				</Suspense>
			</div>
			<ul className="flex gap-4" role="navigation">
				<li>
					<ActiveLink activeClassName={activeClasses} exact={true} href="/">
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink activeClassName={activeClasses} exact={false} href="/categories">
						Categories
					</ActiveLink>
				</li>
				<li>
					<ActiveLink activeClassName={activeClasses} exact={false} href="/categories/accessories">
						Accessories
					</ActiveLink>
				</li>
				<li>
					<ActiveLink activeClassName={activeClasses} exact={false} href="/collections">
						Collections
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						activeClassName={activeClasses}
						exact={false}
						href="/collections/summer-vibes"
					>
						Summer Vibes
					</ActiveLink>
				</li>
				<li>
					<ActiveLink activeClassName={activeClasses} exact={false} href="/products">
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};

Navbar.displayName = "Navbar";
