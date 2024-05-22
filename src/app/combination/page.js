"use client"
import {useState} from "react"
import StartCombination from "../../components/StartCombination"

export default function Combination() {
	const [isGameOn, setGame] = useState(false)

	const startGame = () => {
		setGame((prevGame) => !prevGame)
	}
	return (
		<div className="text-white">
			{isGameOn ? (
				<div>
					<h1>hello world</h1>
				</div>
			) : (
				<div>
					<StartCombination startGame={startGame} />
				</div>
			)}
		</div>
	)
}
