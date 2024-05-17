import Image from "next/image"
import MainPage from "./components/MainPage"
import CardGame from "./components/CardGame"
import Navbar from "./components/header"
import Login from "./components/Login"

export default function Home() {
	return (
		<div>
			<div>
				{/* <Navbar /> */}
				<MainPage></MainPage>
			</div>

			<div className="flex  justify-center py-10 px-8 ">
				<CardGame></CardGame>
			</div>
		</div>
	)
}
