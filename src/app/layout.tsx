import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";
import { ThemeProvider } from "@/components/theme/theme-provider";



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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<MainLayout children={children} />
				</ThemeProvider>
			</body>
		</html>
	);
}
