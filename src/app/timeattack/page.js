"use client";
import { useState } from "react";
import StartTimeAttack from "../../components/StartTimeAttack";
import Image from "next/image";
import Stopwatch from "../../assets/stopwatch.svg";

export default function TimeAttack() {
  const [isGameOn, setGame] = useState(true);
  const startGame = () => {
    setGame((prevGame) => !prevGame);
  };

  return (
    <div className="text-white">
      {isGameOn ? (
        <div>
          <StartTimeAttack startGame={startGame} />
        </div>
      ) : (
        <div className="flex flex-col h-screen bg-backgroundColor w-full text-white overflow-hidden">
          <div className="flex flex-row justify-between py-7 px-9 rounded-full">
            <div className="flex flex-row justify-start items-center px-7 bg-[#444C58] w-60 h-20 gap-7 text-4xl rounded-full ">
              <Image
                src={Stopwatch}
                alt="Stopwatch"
                height={60}
                width={60}
                className="animate-fadeInOut"
              />
              <p className="animate-fadeInOut">60 s</p>
            </div>
            <div className="flex flex-row justify-start items-center px-7 gap-7 text-2xl rounded-full ">
              <div className="font-semibold">Score:</div>30
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-start gap-14 items-center">
            <div className="flex justify-center items-center w-[800px] h-48 text-7xl bg-[#444c58] rounded-[50px]">
              8x7
            </div>
            <div className="max-w-md mx-auto mt-10 p-6">
              <label
                htmlFor="answer"
                className="block text-sm font-medium text-gray-300"
              ></label>
              <input
                type="number"
                id="answer"
                inputMode="numeric"
                pattern="\d*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-center focus:outline-none sm:text-3xl text-white bg-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
