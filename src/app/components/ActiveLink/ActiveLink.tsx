"use client";
import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: Route; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			className={clsx({
				"text-orange-200 underline": isActive,
			})}
			href={href}
		>
			{children}
		</Link>
	);
};
