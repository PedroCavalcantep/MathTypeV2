"use client";

import { Input } from "@material-tailwind/react";
import React from "react";
import Image from "next/image";
import Close from "../assets/close_icon.svg";
import LogoSmall from "../assets/logo_small.svg";
import GoogleLogo from "../assets/GooGoo.svg"


export function Register() {
  return (
    <div className="flex flex-col w-[500px] ">
          <button onClick={closeForm} className=" place-self-end">
            <Image src={Close} alt="Close" />
          </button>

          <div className="flex flex-col items-center gap-4 py-8  rounded-3xl bg-[#333A45]  ">
            <Image src={LogoSmall} alt="LogoSmall" />
            <span className="font-bold text-3xl">Login In MathType</span>

            <div className="flex flex-col gap-2">
              <div className=" flex flex-col gap-8 w-72">
                <Input label="Email Endress" color="white" />

                <Input 
                label="Password" 
                color="white" 
                type="password"
                />
              </div>

              <button className="self-end hover:text-blue-100 text-blue-600 transition duration-300 ease-in-out">
                <span className="self-end text-xs">Forgot password?</span>
              </button>
            </div>
            <button className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 font-bold hover:text-white w-[280px] py-2 px-12  transition duration-300 ease-in-out rounded">
              <span>Enter</span>
            </button>

            <div className="my-6 flex items-center justify-center">
              <div className="border-t w-28 border-gray-300 flex-grow mr-3"></div>
              <span className="text-xs text-gray-200">OU</span>
              <div className="border-t w-28 border-gray-300 flex-grow ml-3"></div>
            </div>

            <button className="flex flex-row items-center w-72 rounded-full gap-2 bg-[#2E343D] transition duration-300 ease-in-out hover:bg-gray-700">
              <Image className="rounded-l-full"
                  src={GoogleLogo}
                  alt="GoogleLogo"
                  
              />
              <span className="flex place-self-center px-10 font-semibold text-xs">Continue with Google</span>
            </button>

            <span className=" text-xs">Not have an account yet? <button className=" hover:text-blue-100 transition duration-300 ease-in-out text-blue-600 ">Register</button>
            </span>

          </div>
        </div>
  )
}