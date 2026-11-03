import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { LanguageProvider } from "@/lib/LanguageContext";
import { PageLoader } from "@/components/PageLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({
	subsets: ["latin"],
	variable: "--font-calistoga",
	weight: "400",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://rakanfadhil.com"),
	title: "Rakan Fadhil Prayata | Portfolio",
	description:
		"Portfolio of Rakan Fadhil Prayata, an Informatics Engineering graduate from Universitas Brawijaya. Web development, IT operations, projects, and certificates.",
	authors: [{ name: "Rakan Fadhil Prayata", url: "https://rakanfadhil.com/" }],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: "/",
		siteName: "Rakan Fadhil Prayata",
		title: "Rakan Fadhil Prayata | Portfolio",
		description:
			"Web development, IT operations, projects, and certificates of Rakan Fadhil Prayata, an Informatics Engineering graduate from Universitas Brawijaya.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" className="relative">
			<head>
				<link rel="describedby" href="/llms.txt" type="text/plain" />
				<link rel="ard" href="/.well-known/ard.json" type="application/json" />
				<link rel="sitemap" href="/sitemap.xml" type="application/xml" />
			</head>
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					"bg-gray-900 text-white antialiased font-sans",
				)}
			>
				<LanguageProvider>
					<PageLoader>{children}</PageLoader>
				</LanguageProvider>
			</body>
		</html>
	);
}
