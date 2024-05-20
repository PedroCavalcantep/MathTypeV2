import Image from "next/image"
import MainPage from "./components/MainPage"
import CardGame from "./components/CardGame"
import Login from "./components/Login"
import Footer from "./components/Footer"

export default function Home() {
	return (
		<div>
			<div>
				<MainPage></MainPage>
			</div>

			<div className="flex  justify-center py-10 px-8 ">
				<CardGame></CardGame>
			</div>

			<div>
				<Footer />
			</div>
		</div>
	)
}
