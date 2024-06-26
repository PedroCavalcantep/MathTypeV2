/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Logo from "../assets/logo.svg"
import Link from "next/link"

export default function MainPage() {
	return (
		<section className=" flex flex-col items-center justify-around gap-4 text-white bg-backgroundColor bg-no-repeat bg-center bg-cover w-full h-[500px]">
			<Image src={Logo} alt="Logo" />

			<Link href={"/timeattack"}>
			<button className=" bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 font-bold hover:text-white py-4 px-12  transition duration-300 ease-in-out rounded">
				<span>Let's play</span>
			</button>
			</Link>

		</section>
	)
}
