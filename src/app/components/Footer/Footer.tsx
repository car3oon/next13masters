import { ActiveLink } from "@/ui/ActiveLink";

export const Footer = () => {
	return (
		<footer>
			<p className="pb-3 text-center text-gray-600">© {new Date().getFullYear()} </p>
			<ul className="mb-6 mt-2 flex justify-center space-x-4 text-sm">
				<li>
					<ActiveLink className="text-slate-600 hover:text-slate-400" href="/terms-of-use">
						Terms of use
					</ActiveLink>
				</li>
				<li>
					<ActiveLink className="text-slate-600 hover:text-slate-400" href="/privacy-policy">
						Privacy Policy
					</ActiveLink>
				</li>
			</ul>
		</footer>
	);
};
