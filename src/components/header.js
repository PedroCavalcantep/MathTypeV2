"use client"
import Image from "next/image"
import Link from "next/link"
import Profile from "../assets/profile.svg"
import { ItensMenu } from "./ItensMenu"
import Login from "./Login"
import { useState } from "react"
import Register from "./Register"
import { useRouter } from "next/navigation"

export default function Navbar() {
	const Router = useRouter()
	const [loginState, setLogin] = useState(false)
	const [registerState, setRegister] = useState(false)

	const toggleLogin = () => {
		setLogin((loginState) => !loginState)
	}
	const toggleRegister = () => {
		setRegister((registerState) => !registerState)
	}

	return (
		<header className="w-full bg-corheader text-white py-1">
			<div className="w-full max-w-[1246px] px-[15px] mx-auto">
				<div className="flex justify-around items-center gap-14">
					<div>
						<Link href={"/"}>
							<button className=" text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-500">
								MathType
							</button>
						</Link>
					</div>

					<div>
						<button
							onClick={toggleLogin}
							className=" flex items-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700"
						>
							<Image src={Profile} alt="perfil" />
							<span>Login</span>
						</button>
					</div>
				</div>
			</div>
			<Login isOpen={loginState} closeForm={toggleLogin} toggleRegister={toggleRegister} />
			<Register isOpen={registerState} closeForm={toggleRegister} toggleLogin={toggleLogin} />
		</header>
	)
}
