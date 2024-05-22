"use client"

import Instagram from "../assets/math.svg"
import { Typography } from "@material-tailwind/react"
import Image from "next/image"
import LogoSmall from "../assets/logo_small.svg"
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Button,
	List,
	ListItem,
	ListItemPrefix
} from "@material-tailwind/react"

export default function Footer() {
	return (
		<footer className="w-full bg-backgroundColor p-8">
			<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-backgroundColor text-center md:justify-between">
				<div className="flex flex-row items-center gap-7">
					<Image src={LogoSmall} alt="LogoSmall" />

					<Typography color="blue-gray" className="text-white text-center font-normal">
						&copy; 2024 MathType
					</Typography>
				</div>
				<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
					<Popover
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0, y: 25 }
						}}
					>
						<PopoverHandler>
							<li>
								<Typography
									as="a"
									color="blue-gray"
									className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500 cursor-pointer"
								>
									About Us
								</Typography>
							</li>
						</PopoverHandler>

						<PopoverContent>5 Nerdolas fazendo um site show de bola </PopoverContent>
					</Popover>

					<Popover
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0, y: 25 }
						}}
					>
						<PopoverHandler>
							<li>
								<Typography
									as="a"
									color="blue-gray"
									className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500 cursor-pointer"
								>
									Contribute
								</Typography>
							</li>
						</PopoverHandler>
						<PopoverContent>faz o Pix ai namoral</PopoverContent>
					</Popover>
					<Popover
						animate={{
							mount: { scale: 1, y: 0 },
							unmount: { scale: 0, y: 25 }
						}}
					>
						<PopoverHandler>
							<li>
								<Typography
									as="a"
									color="blue-gray"
									className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500 cursor-pointer"
								>
									Contact Us
								</Typography>
							</li>
						</PopoverHandler>
						<PopoverContent>
							<List className="p-0">
								<ListItem>
									<ListItemPrefix>
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
												fill="#90A4AE"
											/>
											<path
												d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
												fill="#90A4AE"
											/>
										</svg>
									</ListItemPrefix>
									mathtype@gmail.com
								</ListItem>
								<ListItem>
									<ListItemPrefix>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
										>
											<path
												fill="#90A4AE"
												d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
											/>
											<path
												fill="#90A4AE"
												fill-rule="evenodd"
												d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
												clip-rule="evenodd"
											/>
										</svg>
									</ListItemPrefix>
									@MathType2v
								</ListItem>
							</List>
						</PopoverContent>
					</Popover>
				</ul>
			</div>
		</footer>
	)
}
