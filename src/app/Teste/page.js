"use client";

import Image from "next/image";
import Stopwatch from "../../assets/stopwatch.svg";
import { useState } from "react";

export default function Teste() {
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para validar ou enviar a resposta
    console.log("Resposta do usuário:", answer);
  };

  return (
    <div className="flex flex-col h-screen bg-backgroundColor w-full text-white overflow-hidden">
      {/* Header */}
      <div className="flex py-7 px-9 rounded-full">
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
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 justify-start gap-14 items-center">
        <div className="flex justify-center items-center w-[800px] h-48 text-7xl bg-[#444c58] rounded-[50px]">
          8x7
        </div>
        <div className="max-w-md mx-auto mt-10 p-6">
  <label
    htmlFor="answer"
    className="block text-sm font-medium text-gray-300"
  >
  </label>
  <input
    type="number"
    id="answer"
    value={answer}
    onChange={handleChange}
    inputMode="numeric"
    pattern="\d*"
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-center focus:outline-none sm:text-3xl text-white bg-transparent"
  />
</div>

      </div>
    </div>
  );
}
