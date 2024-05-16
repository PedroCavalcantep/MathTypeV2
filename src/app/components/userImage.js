"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function UserImage({ id }) {
	const [image, setImage] = useState("")

	const getImage = () => {
		axios
			.get(`http://localhost:3333/image/${id}`, {
				responseType: "arraybuffer"
			})
			.then((res) => {
				const base64 = btoa(
					new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), "")
				)
				setImage(base64)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	useEffect(() => {
		getImage()
	}, [])

	return (
		<div className="text-white flex justify-center ">
			<div>
				<Image
					className="rounded-full"
					src={`data:image/jpeg;charset=utf-8;base64,${image}`}
					alt=""
					width={50}
					height={50}
				/>
			</div>
		</div>
	)
}
