"use client";

import Image from "next/image";
import Stopwatch from "../../assets/stopwatch.svg";
import { Input } from "@material-tailwind/react";

export default function Teste() {
  return (
    <div className="flex flex-col h-screen bg-backgroundColor w-full text-white overflow-hidden">
      {/* Header */}
      <div className="flex py-7 px-9 rounded-full">
        <div className="flex flex-row justify-start items-center px-7 bg-[#444C58] w-60 h-20 gap-7 text-4xl rounded-full">
          <Image 
            src={Stopwatch}
            alt="Stopwatch"
            height={60}
            width={60}
          />
          <p>60 s</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 justify-start gap-14 items-center">
        <div className="flex justify-center items-center w-[800px] h-48 text-7xl bg-[#444c58] rounded-[50px]">
          8x7
        </div>
        <div className="w-72">
          <Input color="white" />
        </div>
      </div>
    </div>
  );
}
