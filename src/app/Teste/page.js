"use client";

import { Input } from "@material-tailwind/react";
import React from "react";
import Image from "next/image";
import Close from "../assets/close_icon.svg";
import LogoSmall from "../assets/logo_small.svg";
import GoogleLogo from "../assets/GooGoo.svg";

export default function Home() {
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center text-white ">
      <div className="flex flex-col w-[500px] ">
        <div className="flex flex-col items-center gap-6 pb-8  rounded-3xl bg-[#333A45]  ">

          <div className="flex flex-row justify-between w-[470px] ">

            <Image 

            className=" "
            src={LogoSmall} 
            alt="LogoSmall" 
            />

            <button className="flex px-3 py-3 ">
              <Image
                src={Close}
                alt="Close" 
                className="self-end hover:bg-gray-400 hover:text-gray-700 transition duration-300 ease-in-out rounded-full"
              />
            </button>
          </div>

          <span className="font-bold text-3xl">Create your account</span>

          <div className="flex flex-col gap-2">
            <div className=" flex flex-col gap-8 w-72">
              <Input label="Username" color="white" />

              <Input label="Email" color="white" type="password" />

              <Input label="Password" color="white" type="password" />

              <Input label="Confirm Password" color="white" type="password" />
            </div>
          </div>
          <button className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 font-bold hover:text-white w-[295px] py-2 px-12  transition duration-300 ease-in-out rounded">
            <span>Enter</span>
          </button>

          <span className=" text-xs">
            Not have an account yet?{" "}
            <button className=" hover:text-blue-100 transition duration-300 ease-in-out text-blue-600 ">
              {" "}
              Register
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
