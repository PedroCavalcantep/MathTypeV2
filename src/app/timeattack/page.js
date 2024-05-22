"use client"
import { useState } from "react"
import StartTimeAttack from "../../components/StartTimeAttack"

export default function TimeAttack() {
	const [isGameOn, setGame] = useState(true)
	const startGame = () => {
		setGame((prevGame) => !prevGame)
	}

	return (
		<div className="text-white">
			{isGameOn ? (
				<div>
					<StartTimeAttack startGame={startGame} />
				</div>
			) : (
				<h1> hello world</h1>
			)}
		</div>
	)
}
