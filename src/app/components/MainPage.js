import Image from "next/image"
import Logo from '../assets/logo.svg'

export default function MainPage() {
  return (
    <section className=" flex flex-col items-center justify-around gap-4 text-white bg-backgroundColor bg-no-repeat bg-center bg-cover w-full h-[500px]">
      
      <Image
        src={Logo}
        alt="Logo"
        />
     

      <button className=" bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 font-bold hover:text-white py-4 px-12  transition duration-300 ease-in-out rounded">
        <span>Lets play</span>
      </button>
    </section>
  )
}