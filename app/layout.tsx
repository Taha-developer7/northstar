import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Northstar Works | Smart Home & Maintenance Services",
	description: "Dependable home maintenance, repair, and support services for everyday living. AC care, electrical work, general upkeep, and trusted local assistance.",
	icons: {
		icon: [
			{ url: "/northstar-icon.svg", type: "image/svg+xml" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" },
		],
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
