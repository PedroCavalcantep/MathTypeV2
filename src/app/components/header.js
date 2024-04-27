import Image from "next/image";

import Profile from '../assets/profile.svg'

import { ItensMenu } from "./ItensMenu";


export default function Navbar() {
  return (
    <header className="w-full bg-corheader text-white py-1">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <div className="flex justify-between items-center gap-14">
          <div>
            <button className=" text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-500">MathType</button>
          </div>
          <ul className="flex items-center  gap-14">
            <li>
              <ItensMenu
              name="About"
              />
            </li>
            <li>
              <ItensMenu
                name="Contact"
              />
            </li>
            <li>
              <ItensMenu
                name="Donate"
              />
            </li>
            
          </ul>

          <div>
           <button className=" flex items-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700">
            <Image
              src={Profile}
              alt="perfil"
            />
            <span>Login In</span>
           </button>
          </div>
        </div>
      </div>
    </header>
  );
}
