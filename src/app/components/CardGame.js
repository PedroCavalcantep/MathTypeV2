import Image from "next/image"
import Timer from "../assets/timer.svg"
import Math from "../assets/math.svg"
import Halter from "../assets/halter.svg"
import Icon2 from "../assets/2x_icon.svg"
import Link from "next/link"

export default function CardGame() {
	return (
		<div className=" flex max-w-5x1 mx-auto gap-8 group">
			<Link href={"/timeattack"}>
				<div className="bg-[#434C5E] duration-500 w-[280px] h-[250px] hover:!blur-none group-hover:scale-[0.95] hover:!scale-110 text-white text-lg cursor-pointer font-extrabold rounded-xl shadow-lg shadow-gray-600 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-blue-400  hover:text-white  transition  ease-in-out">
					<Image src={Timer} alt="Timer" />

					<p>Time Attack</p>
					<p>Contas contra o tempo</p>
				</div>
			</Link>

			<div className="bg-[#434C5E] duration-500 w-[280px] h-[250px] hover:!blur-none group-hover:scale-[0.95] hover:!scale-110 text-white text-lg cursor-pointer font-extrabold rounded-xl shadow-lg shadow-gray-600 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-blue-400  hover:text-white  transition  ease-in-out">
				<Image src={Halter} alt="Halter" />

				<p>Training Mode</p>
				<p>Contas em tempo livre</p>
			</div>

			<div className="bg-[#434C5E] duration-500 w-[280px] h-[250px] hover:!blur-none group-hover:scale-[0.95] hover:!scale-110 text-white text-xl cursor-pointer font-extrabold rounded-xl shadow-lg shadow-gray-600 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-blue-400  hover:text-white  transition  ease-in-out">
				<Image src={Icon2} alt="Icon2" />

				<p>Combination</p>
				<p>Contas Duplas</p>
			</div>
		</div>
	)
}
