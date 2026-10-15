import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Rakan's Portfolio",
	description: "Created with the help of Frontend Tribe",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon.ico",
				href: "/favicon.ico",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon.ico",
				href: "/favicon.ico",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					"bg-gray-900 text-white antialiased font-sans",
				)}
			>
				{children}
			</body>
		</html>
	);
}
