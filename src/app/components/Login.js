"use client"
import Image from "next/image"
import Close from "../assets/close_icon.svg"
import Logo from "../assets/Logo-noname.svg"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Login({ isOpen, closeForm, updateLoginStatus }) {
	const [email, setEmail] = useState("")
	const [senha, setSenha] = useState("")
	const router = useRouter()

	const submitForm = async (e) => {
		e.preventDefault()
		axios
			.post(
				"http://localhost:3333/login",
				{
					email: email,
					senha: senha
				},
				{
					withCredentials: true
				}
			)
			.then((res) => {
				if (res.status == 201) {
					updateLoginStatus(true), closeForm(), router.refresh()
				}
			})
			.catch((err) => console.log(err))
	}
	useEffect(() => {}, [senha])
	if (isOpen) {
		return (
			<div
				className=" fixed inset-0 bg-black bg-opacity-25
      backdrop-blur-sm flex justify-center items-center text-white "
			>
				<div className="flex flex-col w-[600px] ">
					<button onClick={closeForm} className=" place-self-end">
						<Image src={Close} alt="Close" />
					</button>

					<div className="bg-[#333A45] p-2 rounded-3xl  flex flex-col items-center">
						<Image src={Logo} alt="logo" className="m-3 mt-5 mb-10 size-14" />

						<h1 className="text-center font-bold text-3xl mb-5">Entre no MathType</h1>

						<form className="text-center pt-3" onSubmit={submitForm}>
							<input
								className="p-3 m-3 bg-transparent  border-blue-800 rounded-sm  w-96"
								type="email"
								placeholder="Email:"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
							<br />

							<input
								className="p-3 m-3 bg-transparent rounded-sm border-blue-800   w-96"
								type="password"
								placeholder="Senha:"
								onChange={(e) => setSenha(e.target.value)}
								value={senha}
							/>
							<br />

							<input
								className="p-3 m-3 bg-[#689EF2] rounded-3xl w-96 mt-10 font-extrabold drop-shadow-lg text-xk cursor-pointer hover:bg-[#426caa] "
								type="submit"
								value="Entrar"
							/>
						</form>
						<p className="m-5">
							Ainda não tem uma conta? <b>Registre-se</b>.
						</p>
					</div>
				</div>
			</div>
		)
	} else {
		return null
	}
}
