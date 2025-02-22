import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/header"
import Footer from "../components/Footer"
import { Analytics } from "@vercel/analytics/react"
import { AuthProvider } from "./authcontext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "MathType",
	description: "tens o que é necessário para esmagares essa rata?",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<Navbar />
					{children}
				</AuthProvider>
			</body>
		</html>
	)
}
