import CardGame from "../components/CardGame"
import Navbar from "../components/header"

import Timeattack from "../components/timeattack"

export default function Home() {
	return (
		<div>
			{/* <Navbar /> */}
			<Timeattack />
			<div className="flex  justify-center py-10 px-8 ">
				<CardGame></CardGame>
			</div>
		</div>
	)
}
