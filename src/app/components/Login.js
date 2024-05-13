import Image from "next/image"
import Close from "../assets/close_icon.svg"

export default function Login({ isOpen, closeForm }) {
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

					<div className="bg-[#333A45]  p-2">Login</div>
				</div>
			</div>
		)
	} else {
		return null
	}
}
