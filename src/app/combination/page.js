"use client"
import {use, useEffect, useState} from "react"
import StartCombination from "../../components/StartCombination"
import Image from "next/image"
import Stopwatch from "../../assets/stopwatch.svg"
import Resultado from "../../components/Resultado"

export default function Combination() {
	const [numeros, setNumeros] = useState([])
	const [isGameOn, setGame] = useState(false)
	const [timer, setTimer] = useState(10)
	const [resultado, setResultado] = useState(0)
	const [userInput, setUserInput] = useState()
	const [score, setScore] = useState(0)
	const [ShowResult, setShowResult] = useState(false)
	const [acertos, setAcertos] = useState(0)
	const [erros, setErros] = useState(0)

	const gerarConta = () => {
		setNumeros([gerarNumeros(2, 10), gerarNumeros(2, 10), gerarNumeros(2, 10), gerarNumeros(2, 10)])
	}

	const gerarNumeros = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min
	}
	const handleKeyPress = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault()
			checarResultado()
		}
	}
	const checarResultado = () => {
		if (userInput == resultado) {
			setScore((prevScore) => prevScore + 10)
			setAcertos((acertos) => acertos + 1)
			setUserInput("")
		} else {
			setScore((prevScore) => prevScore - 5)
			setErros((erros) => erros + 1)
			setUserInput(" ")
		}
		gerarConta()
		setUserInput("")
	}

	const startGame = () => {
		setGame((prevGame) => !prevGame)

		console.log(numeros[0] + "+" + numeros[1])
	}
	const reiniciar = () => {
		gerarConta()
		setAcertos(0)
		setErros(0)
		setTimer(10)
		setScore(0)
		setShowResult(false)
		setGame(true)
	}
	//gerar conta
	useEffect(() => {
		gerarConta()
	}, [score])
	useEffect(() => {
		console.log(resultado)
	}, [gerarConta])

	//timer
	useEffect(() => {
		if (isGameOn) {
			const interval = setInterval(() => {
				setTimer((prevTimer) => {
					if (prevTimer <= 1) {
						clearInterval(interval)
						setGame(false)
						setShowResult(true)

						return 0
					}

					return prevTimer - 1
				})
			}, 1000)

			return () => clearInterval(interval)
		}
	}, [isGameOn])

	//resultado
	useEffect(() => {
		setResultado(numeros[0] * numeros[1] + numeros[2] * numeros[3])
	}, [numeros])

	return (
		<div className="text-white">
			{ShowResult ? (
				<Resultado acertos={acertos} erros={erros} reiniciar={reiniciar} />
			) : (
				<div>
					{" "}
					{isGameOn ? (
						<div>
							<div className="flex flex-col h-screen bg-backgroundColor w-full text-white overflow-hidden">
								{/* Header */}
								<div className="flex flex-row justify-between py-7 px-9 rounded-full">
									<div className="flex flex-row justify-start items-center px-7 bg-[#444C58] w-60 h-20 gap-7 text-4xl rounded-full ">
										<Image
											src={Stopwatch}
											alt="Stopwatch"
											height={60}
											width={60}
											className="animate-fadeInOut"
										/>
										<p className="animate-fadeInOut">{timer}</p>
									</div>
									<div className="flex flex-row justify-start items-center px-7 gap-7 text-2xl rounded-full ">
										<div className="font-semibold">Score:</div>
										{score}
									</div>
								</div>

								<div className="flex flex-col flex-1 justify-start gap-14 items-center">
									<div className="flex justify-center items-center w-[800px] h-48 text-7xl bg-[#444c58] rounded-[50px]">
										{numeros[0]} x {numeros[1]} + {numeros[2]} x {numeros[3]}
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
											autoComplete="off"
											value={userInput}
											onChange={(e) => {
												setUserInput(e.target.value)
											}}
											onKeyDown={(e) => {
												handleKeyPress(e)
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div>
							<StartCombination startGame={startGame} />
						</div>
					)}
				</div>
			)}
		</div>
	)
}
