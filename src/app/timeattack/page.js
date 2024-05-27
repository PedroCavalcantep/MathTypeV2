"use client"
import {useState, useEffect} from "react"
import StartTimeAttack from "../../components/StartTimeAttack"
import Image from "next/image"
import Stopwatch from "../../assets/stopwatch.svg"
import Resultado from "../../components/Resultado"

export default function TimeAttack() {
	const [isGameOn, setGame] = useState(true)
	const [showResult, setShowResult] = useState(false)
	const [numeros, setNumeros] = useState([])
	const [timer, setTimer] = useState(10)
	const [score, setScore] = useState(0)
	const [acertos, setAcertos] = useState(0)
	const [erros, setErros] = useState(0)
	const [resultado, setResultado] = useState()
	const [userInput, setUserIput] = useState()

	const gerarNumeros = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min
	}
	const gerarConta = () => {
		setNumeros([gerarNumeros(2, 10), gerarNumeros(2, 10)])
	}

	const reiniciar = () => {
		gerarConta()
		setAcertos(0)
		setErros(0)
		setTimer(30)
		setScore(0)
		setShowResult(false)
		setGame(true)
	}

	const handleKey = (event) => {
		if (
			!/[0-9]/.test(event.key) &&
			!["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)
		) {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault()
				if (userInput == resultado) {
					setScore((prevScore) => (prevScore += 10))
					setAcertos((prevAcertos) => (prevAcertos += 1))
					setUserIput("")
					gerarConta()
				} else {
					setScore((prevScore) => (prevScore -= 5))
					setErros((prevErros) => (prevErros += 1))
					setUserIput("")
					gerarConta()
				}
			}
			event.preventDefault()
		}
	}

	// Effect do timer
	useEffect(() => {
		gerarConta()
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
	useEffect(() => {
		setResultado(numeros[0] * numeros[1])
	}, [numeros])

	return (
		<div className="text-white">
			{/* mostra o resultado */}
			{showResult ? (
				<Resultado acertos={acertos} erros={erros} reiniciar={reiniciar} />
			) : (
				<div>
					{isGameOn == false ? (
						<div>
							<StartTimeAttack
								startGame={() => {
									setGame(true)
								}}
							/>
						</div>
					) : (
						<div className="flex flex-col h-screen bg-backgroundColor w-full text-white overflow-hidden">
							<div className="flex flex-row justify-between py-7 px-9 rounded-full">
								<div className="flex flex-row justify-start items-center px-7 bg-[#444C58] w-60 h-20 gap-7 text-4xl rounded-full ">
									<Image
										src={Stopwatch}
										alt="Stopwatch"
										height={60}
										width={60}
										className="animate-fadeInOut"
									/>
									<p className="animate-fadeInOut">{timer} s</p>
								</div>
								<div className="flex flex-row justify-start items-center px-7 gap-7 text-2xl rounded-full ">
									<div className="font-semibold">Score:</div>
									{score}
								</div>
							</div>

							<div className="flex flex-col flex-1 justify-start gap-14 items-center">
								<div className="flex justify-center items-center w-[800px] h-48 text-7xl bg-[#444c58] rounded-[50px]">
									{numeros[0]} x {numeros[1]}
								</div>
								{resultado}

								<div className="max-w-md mx-auto mt-10 p-6">
									<label
										htmlFor="answer"
										className="block text-sm font-medium text-gray-300"
									></label>
									<input
										autoFocus
										// type="number"
										id="answer"
										value={userInput}
										inputMode="numeric"
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-center focus:outline-none sm:text-3xl text-white bg-transparent"
										onKeyDown={handleKey}
										onChange={(e) => {
											setUserIput(e.target.value)
										}}
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	)
}
