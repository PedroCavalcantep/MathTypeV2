import Dumbbell from "../assets/Dumbbell.svg";
import Image from "next/image";


export default function StartTimeAttack() {
  return (

      <div className=" flex justify-center items-center w-full h-[837px] bg-backgroundColor">

        <div className=" flex flex-col items-center py-6 px-6 gap-9 mb-20 text-white bg-gray-700 w-4/5 h-[500px] rounded-2xl ">

        <Image
          className="animate-fadeInOut z-30"
          src={Dumbbell}
          alt="Dumbbell"
          width={150}
          height={130}
        />

        <p className="text-7xl font-bold" >Training</p>
        <p className=" text-center text-xl font-medium whitespace-normal tracking-wide sm:tracking-wider md:tracking-widest leading-relaxed">Treine seu raciocínio sem pressa no modo Training: pratique suas habilidades e melhore seu desempenho com tempo ilimitado. A prática leva à perfeição!</p>
        
        <button className=" bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 font-bold hover:text-white py-2 px-10  transition duration-300 ease-in-out rounded">
			  	<span>Start</span>
			  </button>
        </div>
          
          
    </div>
  )
}