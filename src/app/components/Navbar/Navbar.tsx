import { ActiveLink } from "@/ui/ActiveLink";

export const Navbar = () => {
	const activeClasses = "text-orange-500 underline";

	return (
		<nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
			<h1 className="text-2xl font-bold">My Shop</h1>
			<ul className="flex gap-4">
				<li>
					<ActiveLink activeClassName={activeClasses} exact={true} href="/">
						Home
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
