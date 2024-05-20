"use client"
import Image from "next/image"
import Link from "next/link"
import Timer from "../assets/timer.svg"
import Math from "../assets/math.svg"
import Dumbbell from "../assets/dumbbell.svg"
import Icon2 from "../assets/2x_icon.svg"
import { useRouter } from "next/navigation"

export default function CardGame() {
	const router = useRouter()
	return (
		<div className=" flex max-w-5x1 mx-auto gap-8 group">
			<Link href={"/timeattack"}>
				<div className="bg-[#434C5E] duration-500 w-[280px] h-[250px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 text-white text-lg cursor-pointer font-extrabold rounded-xl shadow-lg shadow-gray-900 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-blue-400  hover:text-white  transition ease-in-out">
					<Image src={Timer} alt="Timer" />

					<p>Time Attack</p>
					<p>Contas contra o tempo</p>
				</div>
			</Link>

			<Link href={"/training"}>
				<div className="bg-[#434C5E] duration-500 w-[280px] h-[250px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 text-white text-lg cursor-pointer font-extrabold rounded-xl shadow-lg shadow- p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-blue-400  hover:text-white  transition ease-in-out">
					<Image src={Dumbbell} alt="Halter" />

					<p>Training Mode</p>
					<p>Contas em tempo livre</p>
				</div>
			</Link>
			<Link href={"/combination"}>
				<div className="bg-[#434C5E] duration-500 w-[280px] h-[250px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 text-white text-lg cursor-pointer font-extrabold rounded-xl shadow-lg shadow-gray-900 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-blue-400  hover:text-white  transition ease-in-out">
					<Image src={Icon2} alt="icon2" />

					<p>Combination</p>
					<p>Contas duplas</p>
				</div>
			</Link>
		</div>
	)
}
