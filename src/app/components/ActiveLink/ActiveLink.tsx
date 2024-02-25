"use client";
import clsx, { type ClassValue } from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type ActiveLinkProps = {
	href: string;
	children: ReactNode;
	className?: ClassValue;
	activeClassName?: ClassValue;
	exact?: boolean;
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isNotExact = pathname !== "/" && href.includes(pathname.split("/")[1]);
	const isActive = exact ? pathname === href : isNotExact;

	return (
		<Link
			className={clsx("hover:underline", className, isActive && activeClassName)}
			href={href as Route}
			aria-current={isActive ? "page" : "false"}
		>
			{children}
		</Link>
	);
};
