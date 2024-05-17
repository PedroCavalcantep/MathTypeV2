"use client"
import Image from "next/image"
import Profile from "../assets/profile.svg"
import { ItensMenu } from "./ItensMenu"
import Login from "./Login"
import { useEffect, useState } from "react"
import axios from "axios"
import UserImage from "./userImage"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
	const [loginModalState, setLogin] = useState(false)
	const [isLogged, setIsLogged] = useState(null)
	const [userName, setUserName] = useState("")
	let [userImage, setUserImage] = useState(null)
	const router = useRouter()

	const updateLoginStatus = (status) => {
		setIsLogged(status)
	}

	const toggleLogin = () => {
		setLogin((loginModalState) => !loginModalState)
	}
	const handleLogout = () => {
		axios
			.post(
				"http://localhost:3333/logout",
				{},
				{
					withCredentials: true
				}
			)
			.then(() => {
				setUserImage(null)
				updateLoginStatus(false)
				router.push("/")
				router.refresh()
			})
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("http://localhost:3333/auth", {
					withCredentials: true
				})
				const { nome, id_foto } = res.data
				setUserName(nome)
				setUserImage(id_foto || 1)
				setIsLogged(true)
			} catch (error) {
				setIsLogged(false)
			}
		}

		fetchData()
	})

	const handleLogin = () => {
		toggleLogin()
		setLogin(true)
	}

	return (
		<header className="w-full bg-corheader text-white py-1">
			<div className="w-full max-w-[1246px] px-[15px] mx-auto">
				<div className="flex justify-between items-center gap-14">
					<div>
						<Link href={"/"}>
							<button className=" text-white text-2xl font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-500">
								MathType
							</button>
						</Link>
					</div>
					<ul className="flex items-center gap-14">
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
						{isLogged === null ? (
							<div className="w-32"></div>
						) : isLogged ? (
							<div className="flex justify-center items-center gap-4">
								<span>{userName}</span>
								{userImage && <UserImage id={userImage} />}
								<button onClick={handleLogout}>Logout</button>
							</div>
						) : (
							<div>
								<button
									onClick={handleLogin}
									className="flex items-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700"
								>
									<Image src={Profile} alt="perfil" />
									<span>Login</span>
								</button>
								<Login
									isOpen={loginModalState}
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
