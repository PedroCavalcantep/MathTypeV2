'use client'

import { Input } from '@material-tailwind/react'
import React from 'react'
import Image from 'next/image'
import Close from '../assets/close_icon.svg'
import LogoSmall from '../assets/logo_small.svg'
import { Button } from '@material-tailwind/react'

export default function Register({ isOpen, closeForm, toggleLogin }) {
	if (isOpen) {
		return (
			<div className=" fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center text-white z-50">
				<div className="flex flex-col w-[500px] ">
					<div className="flex flex-col items-center gap-6 pb-8  rounded-3xl bg-[#333A45]  ">
						<div className="flex flex-row justify-center w-[470px] ">
							<Image className="ml-52 mt-3" src={LogoSmall} alt="LogoSmall" />

							<button className="px-3 py-3 ml-auto">
								<Image
									onClick={closeForm}
									src={Close}
									alt="Close"
									className=" hover:bg-gray-400 hover:text-gray-700 transition duration-300 ease-in-out rounded-full"
								/>
							</button>
						</div>

						<span className="font-bold text-3xl">Create your account</span>

						<div className="flex flex-col gap-2">
							<div className=" flex flex-col gap-8 w-72">
								<Input label="Username" color="white" />

								<Input label="Email" color="white" type="email" />

								<Input label="Password" color="white" type="password" />

								<Input label="Confirm Password" color="white" type="password" />
							</div>
						</div>
						<button className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 font-bold hover:text-white w-[295px] py-2 px-12  transition duration-300 ease-in-out rounded">
							<span>Enter</span>
						</button>
						<div className="my-6 flex items-center justify-center">
							<div className="border-t w-28 border-gray-300 flex-grow mr-3"></div>
							<span className="text-xs text-gray-200">OR</span>
							<div className="border-t w-28 border-gray-300 flex-grow ml-3"></div>
						</div>

						<Button
							size="lg"
							variant="outlined"
							color="blue-gray"
							className="flex items-center gap-3 text-white hover:bg-gray-700 "
						>
							<Image
								src="https://docs.material-tailwind.com/icons/google.svg"
								alt="metamask"
								className="h-6 w-6"
								width={0}
								height={0}
							/>
							Register with Google
						</Button>

						<span className=" text-xs">
							Do you already have an account?{' '}
							<button
								className=" hover:text-blue-100 transition duration-300 ease-in-out text-blue-600 "
								onClick={() => {
									closeForm()
									toggleLogin()
								}}
							>
								Login In
							</button>
						</span>
					</div>
				</div>
			</div>
		)
	} else {
		return null
	}
}
