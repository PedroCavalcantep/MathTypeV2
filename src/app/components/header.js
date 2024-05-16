"use client"
import Image from "next/image"
import Profile from "../assets/profile.svg"
import { ItensMenu } from "./ItensMenu"
import Login from "./Login"
import { useEffect, useState } from "react"
import axios from "axios"
import UserImage from "./userImage"

export default function Navbar() {
	const [loginState, setLogin] = useState(false)
	const [isLogged, setIsLogged] = useState(false)
	const [userName, setUserName] = useState("")
	const [userImage, setUserImage] = useState(1)

	const updateLoginStatus = (status) => {
		setIsLogged(status)
	}

	const toggleLogin = () => {
		setLogin((loginState) => !loginState)
	}

	useEffect(() => {
		axios
			.get("http://localhost:3333/auth", {
				withCredentials: true
			})
			.then((res) => {
				setUserName(res.data.nome)
				console.log(res.data)
				setUserImage(res.data.id_foto)

				setIsLogged(true)
			})
			.catch((err) => {
				setIsLogged(false)
			})
	}, [])

	return (
		<header className="w-full bg-corheader text-white py-1">
			<div className="w-full max-w-[1246px] px-[15px] mx-auto">
				<div className="flex justify-between items-center gap-14">
					<div>
						<button className=" text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-500">
							MathType
						</button>
					</div>
					<ul className="flex items-center  gap-14">
						<li>
							<ItensMenu name="About" />
						</li>
						<li>
							<ItensMenu name="Contact" />
						</li>
						<li>
							<ItensMenu name="Donate" />
						</li>
					</ul>

					<div>
						{isLogged ? (
							<button
								onClick={toggleLogin}
								className=" flex items-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
							>
								<span>{userName}</span>
								<UserImage id={userImage} />
							</button>
						) : (
							<div>
								<button
									onClick={toggleLogin}
									className=" flex items-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700"
								>
									<Image src={Profile} alt="perfil" />
									<span>Login</span>
								</button>
								<Login
									isOpen={loginState}
									closeForm={toggleLogin}
									updateLoginStatus={updateLoginStatus}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
