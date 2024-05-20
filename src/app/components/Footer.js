"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import LogoSmall from "../assets/logo_small.svg"; 


export default function Footer() {
  return (
    <footer className="w-full bg-backgroundColor p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-backgroundColor text-center md:justify-between">

        <div className="flex flex-row items-center gap-7">

        <Image 
          src={LogoSmall}
          alt="LogoSmall"
        
        />

        <Typography color="blue-gray" className="text-white text-center font-normal">
        &copy; 2024 MathType
      </Typography>

        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
        
            
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      
    </footer>
  );
}