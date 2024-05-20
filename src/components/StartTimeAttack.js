import Timer from "../assets/timer.svg"
import Image from "next/image";


export default function StartTimeAttack() {
  return (

      <div className=" flex justify-center items-center w-full h-[837px] bg-backgroundColor">

        <div className=" flex flex-col items-center py-6 px-6 gap-9 mb-20 text-white bg-gray-700 w-4/5 h-[500px] rounded-2xl ">

        <Image
          className="animate-fadeInOut z-30"
          src={Timer}
          alt="Timer"
          width={150}
          height={130}
        />

        <p className="text-7xl font-bold" >Time Attack</p>
        <p className=" text-center text-xl font-medium whitespace-normal tracking-wide sm:tracking-wider md:tracking-widest leading-relaxed">Desafie sua rapidez e precisão no Time Attack: resolva o máximo de contas para ganhar tempo extra e vencer a corrida contra o relógio. Quanto mais você acerta, mais tempo ganha. Mas cuidado, o tempo não espera por ninguém!</p>
        
        <button className=" bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 font-bold hover:text-white py-2 px-10  transition duration-300 ease-in-out rounded">
			  	<span>Start</span>
			  </button>
        </div>
          
          
    </div>
  )
}