"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Pokemon() {
	const [user, setUser] = useState()
	const [loading, setLoading] = useState(true)
	const [image, setImage] = useState("")

	const getImage = () => {
		axios
			.get("http://localhost:3333/image/11", {
				responseType: "arraybuffer"
			})
			.then((res) => {
				const base64 = btoa(
					new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ""),
					setLoading(false)
				)
				setImage(base64C)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	useEffect(() => {
		getImage()
	}, [])

	if (loading) {
		return (
			<div className="text-white flex justify-center ">
				<div>
					<h1>loading</h1>
				</div>
			</div>
		)
	}
	return (
		<div className="text-white flex justify-center ">
			<div>
				<Image
					src={`data:image/jpeg;charset=utf-8;base64,${image}`}
					alt="foto"
					width={500}
					height={500}
				/>
			</div>
		</div>
	)
}
