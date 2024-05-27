"use client"
import {useState} from "react"
import StartTrainingMode from "../../components/StartTraining"
import Image from "next/image";
import Infinite from "../../assets/infinite.svg";
import { Button } from "@material-tailwind/react";

export default function Training() {
	const [isGameOn, setGame] = useState(false)

	const startGame = () => {
		setGame((prevGame) => !prevGame)
	}
	return (
		<div className="text-white">
			{isGameOn ? (
				<div className="flex flex-col h-screen bg-backgroundColor w-full text-white overflow-hidden">
				{/* Header */}
				<div className="flex flex-row justify-between py-7 px-9 rounded-full">
					<div className="flex flex-row justify-center items-center px-7 bg-[#444C58] w-60 h-20 gap-7 text-4xl rounded-full ">
						<Image
							src={Infinite}
							alt="Infinite"
							height={60}
							width={60}
							className="animate-fadeInOut"
						/>
					</div>
					<div className="flex flex-row justify-start items-center px-7 gap-7 text-2xl rounded-full ">
						<div className="font-semibold">Score:</div>30
					</div>
				</div>
	
				{/* Main Content */}
				<div className="flex flex-col flex-1 justify-start gap-14 items-center">
					<div className="flex justify-center items-center w-[800px] h-48 text-7xl bg-[#444c58] rounded-[50px]">
						8x7
					</div>
					<div className="max-w-md mx-auto mt-10 p-6">
						<label
							htmlFor="answer"
							className="block text-sm font-medium text-gray-300"
						></label>
						<input
							type="number"
							id="answer"
							inputMode="numeric"
							pattern="\d*"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-center focus:outline-none sm:text-3xl text-white bg-transparent"
						/>
					</div>
					
					<div className="flex w-max gap-4">
					<Button 
					variant="filled"
					size="lg"
				  className=" w-44 h-14 bg-[#444c58] "
>
						Stop
					</Button>
					</div>

				</div>
			</div>
			) : (
				<div>
					<StartTrainingMode startGame={startGame} />
				</div>
			)}
		</div>
	)
}
