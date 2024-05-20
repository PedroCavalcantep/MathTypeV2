"use client"

import { useEffect, useState } from "react"

export default function Timeattack() {
	const [numero, setNumero] = useState([2, 2])
	const [resultado, setResultado] = useState(0)
	const [userRes, setUserRes] = useState()
	const [score, setScore] = useState([0, 0])

	function gerarNumeros(min, max) {
		return Math.floor(Math.random() * (max - min)) + min
	}

	function verificarResposta() {
		if (userRes == resultado) {
			setScore((prevScore) => {
				const newScore = [...prevScore]
				newScore[0] += 1
				return newScore
			})
			console.log(score)
			gerarConta()
		} else {
			console.log("erro")
			gerarConta()
		}
	}

	function gerarConta() {
		setNumero([gerarNumeros(2, 10), gerarNumeros(2, 10)])
	}

	useEffect(() => {
		setNumero([gerarNumeros(2, 10), gerarNumeros(2, 10)])
	}, [])

	useEffect(() => {
		setResultado(numero[0] * numero[1])
	}, [numero])

	return (
		<div className="flex flex-col items-center justify-around gap-4 text-white bg-backgroundColor bg-no-repeat bg-center bg-cover w-full h-[500px]">
			<h1 className="text-8xl">
				{numero[0]}x{numero[1]}
			</h1>
			<h1>{resultado}</h1>
			<input
				autoFocus
				className="bg-gray-700 text-center w-1/6 h-14 text-xl  rounded-full	 p-1"
				type="number"
				value={userRes}
				onChange={(e) => {
					setUserRes(e.target.value)
				}}
			></input>
			<button className="bg-blue-700 text-4xl rounded-lg p-5" onClick={verificarResposta}>
				verificar resposta
			</button>
		</div>
	)
}
