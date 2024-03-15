import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import NavBar from "@/components/DashBoard/NavBar";



//👇 Configure our font object
const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: "V Chat App",
	description: "A modern web chat application.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={openSans.className}>
				<QueryProvider>
					<div className="min-h-full">
						<NavBar />
						{children}
					</div>
				</QueryProvider>
			</body>
		</html>
	);
}
