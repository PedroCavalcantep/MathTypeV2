"use client";

import Image from "next/image";
import Stopwatch from "../../assets/stopwatch.svg";
import { Textarea } from "@material-tailwind/react";

export default function Teste() {
  return (
    <div className="flex flex-col bg-backgroundColor w-full h-[94vh] cover-background text-white">
      <div className=" flex w-full py-7 px-9">
        <div className="flex flex-row justify-start items-center px-7 bg-[#444C58] w-64 h-24 gap-7 text-5xl rounded-full">
          <Image 
              src={Stopwatch}
              alt="Stopwatch"
              height={60}
              width={60}
          />

          <p>60 s</p>
        </div>
      </div>

      <div className="flex flex-col justify-around items-center h-full">
        <div className=" flex flex-row justify-center items-center w-[800px] h-60 bg-[#444c58] rounded-[50px]">Calculos</div>
        <div>
        <Textarea 
        size="md" 
        label="Textarea Medium" 
     
        color="white"
        
        />
        </div>
      </div>
    </div>
  );
}
