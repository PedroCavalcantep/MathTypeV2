"use client"
import {useState} from "react"
import StartTrainingMode from "../../components/StartTraining"

export default function Training() {
	const [isGameOn, setGame] = useState(false)

	const startGame = () => {
		setGame((prevGame) => !prevGame)
	}
	return (
		<div className="text-white">
			{isGameOn ? (
				<div>training</div>
			) : (
				<div>
					<StartTrainingMode startGame={startGame} />
				</div>
			)}
		</div>
	)
}
