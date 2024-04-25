import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/global-components/navbar";
import SmoothScroll from "@/provider/smooth-scroll";
import Footer from "@/components/global-components/footer";

export const metadata: Metadata = {
	title: "Inked",
	description: "Number one best tattoo shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased mx-auto max-w-5xl min-h-screen">
				<SmoothScroll>
					<Navbar />
					{children}
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
