import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "MathType",
	description: ""
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
