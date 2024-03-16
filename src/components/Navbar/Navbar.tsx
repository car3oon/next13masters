import { ActiveLink } from "@/ui/ActiveLink";

export const Navbar = () => {
	const activeClasses = "text-orange-500 underline";

	return (
		<nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
			<p className="text-2xl font-bold">My Shop</p>
			<ul className="flex gap-4">
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
					<ActiveLink activeClassName={activeClasses} exact={false} href="/collections">
						Collections
					</ActiveLink>
				</li>
				<li>
					<ActiveLink activeClassName={activeClasses} exact={false} href="/products/1">
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};

Navbar.displayName = "Navbar";
