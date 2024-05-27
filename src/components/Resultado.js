import {useState} from "react"

import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react"
import dynamic from "next/dynamic"

// Dynamically import components/libraries that rely on window
const Chart = dynamic(() => import("react-apexcharts"), {ssr: false})
const Image = dynamic(() => import("next/image"), {ssr: false})
const Button = dynamic(() => import("@material-tailwind/react").then((mod) => mod.Button), {
	ssr: false
})

// Import assets as usual
import DumbCat from "../assets/CatDumb.png"

export default function Example({acertos, erros, reiniciar}) {
	const userCorrectCount = acertos
	const userErrorCount = erros

	const chartData = [userCorrectCount, userErrorCount]

	const chartOptions = {
		chart: {
			toolbar: {show: false}
		},
		title: {show: false},
		dataLabels: {enabled: false},
		colors: ["#38b000", "#d00000"],
		legend: {show: false},
		tooltip: {
			custom: ({seriesIndex}) => {
				const value = seriesIndex === 0 ? userCorrectCount : userErrorCount
				return `
        <div style="padding: 5px; color: #fff; background: #333; border-radius: 5px;">
          ${seriesIndex === 0 ? "acertos" : "erros"}: ${value}
        </div>`
			}
		}
	}

	return (
		<div className="flex flex-col justify-center items-center w-full h-[90vh]">
			<Card className="w-[700px]">
				<CardHeader
					floated={false}
					shadow={false}
					color="transparent"
					className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
				>
					<div className="w-max rounded-lg bg-gray-900 p-3 text-white">
						<Image
							src={DumbCat}
							alt="CatProfile"
							height={80}
							width={80}
							withBorder={true}
							color="green"
							className=" rounded-md"
						/>
					</div>
					<div>
						<Typography variant="h6" color="blue-gray">
							Sua Pontuação
						</Typography>
						<Typography variant="small" color="gray" className="max-w-sm font-normal">
							Veja seus acertos e erros como uma oportunidade: celebre suas conquistas e use os
							erros como aprendizado para alcançar a excelência!
						</Typography>
					</div>
				</CardHeader>
				<CardBody className=" flex flex-row justify-start mt-4 px-2">
					<Chart type="pie" width={280} height={280} series={chartData} options={chartOptions} />

					<div className="flex flex-row justify-between items-end mb-14 gap-8">
						<Button
							variant="filled"
							size="lg"
							className=" w-44 h-14 bg-[#444c58] "
							onClick={() => {
								reiniciar()
							}}
						>
							Recomeçar
						</Button>
						<Button variant="filled" size="lg" className=" w-44 h-14 bg-[#444c58] ">
							Retornar
						</Button>
					</div>
				</CardBody>
			</Card>
		</div>
	)
}
