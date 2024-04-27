import Image from "next/image"
import Logo from '../assets/logo.svg'

export default function MainPage() {
  return (
    <section className=" flex flex-col items-center gap-10 text-white bg-backgroundColor bg-no-repeat bg-center bg-cover w-full h-[500px]">
      <Image
        src={Logo}
        alt="Logo"
      />
      <p> Transformando a matemática em uma experiência envolvente e competitiva. Desafie-se a cada equação e celebre cada solução </p>

      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  transition duration-300 ease-in-out rounded">
        <span>Lets play</span>
      </button>
    </section>
  )
}