import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/ui/Footer";
import { Navbar } from "@/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<section className="mx-auto max-w-7xl px-4 py-12">{children}</section>
				<Footer />
			</body>
		</html>
	);
}
