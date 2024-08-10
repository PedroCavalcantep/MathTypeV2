"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Infinite from "../../assets/infinite.svg";
import StartTrainingMode from "../../components/StartTraining";
import Resultado from "../../components/Resultado";

export default function Training() {
  const [isGameOn, setGame] = useState(false);
  const [numeros, setNumeros] = useState([]);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState();
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [resultado, setResultado] = useState();
  const [showResult, setShowResult] = useState(false);
  const [kanye, setKanye] = useState("");



  const gerarNumeros = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const gerarConta = () => {
    setNumeros([gerarNumeros(2, 10), gerarNumeros(2, 10)]);
  };

  const checarResultado = () => {
    if (userInput == resultado) {
      setScore((prevScore) => prevScore + 10);
      setAcertos((acertos) => acertos + 1);

      setUserInput("");
    } else {
      setScore((prevScore) => prevScore - 5);
      setErros((erros) => erros + 1);
      setUserInput("");
    }
    gerarConta();
    setUserInput("");
  };

  const reiniciar = () => {
    gerarConta();
    setAcertos(0);
    setErros(0);
    setScore(0);
    setShowResult(false);
    setGame(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checarResultado();
    }
  };
  //gerar conta
  useEffect(() => {
    gerarConta();
  }, []);

  //calcular resultado
  useEffect(() => {
    setResultado(numeros[0] * numeros[1]

  }, [numeros]);

  const startGame = () => {
    setGame((prevGame) => !prevGame);
  };

  return (
    <div className="text-white">
      {showResult ? (
        <Resultado acertos={acertos} erros={erros} reiniciar={reiniciar} />
      ) : (
        <div>
          {isGameOn ? (
            <div className="flex flex-col h-screen bg-backgroundColor w-full text-white overflow-hidden">
              <div className="flex flex-row justify-between py-7 px-9 rounded-full">
                <div className="flex flex-row justify-center items-center px-7 bg-[#444C58] w-60 h-20 gap-7 text-4xl rounded-full ">
                  <Image
                    src={Infinite}
                    alt="Infinite"
                    height={60}
                    width={60}
                    className="animate-fadeInOut"
                  />
                </div>
                <div className="flex flex-row justify-start items-center px-7 gap-7 text-2xl rounded-full ">
                  <div className="font-semibold">Score: {score}</div>
                </div>
              </div>

              <div className="flex flex-col flex-1 justify-start gap-14 items-center">
                <div className="flex justify-center items-center w-[800px] h-48 text-7xl bg-[#444c58] rounded-[50px]">
                  {numeros[0]} X {numeros[1]}
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
                    autoComplete="off"
                    autoFocus
                    pattern="\d*"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-center focus:outline-none sm:text-3xl text-white bg-transparent"
                    value={userInput}
                    onChange={(e) => {
                      setUserInput(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      handleKeyPress(e);
                    }}
                  />
                </div>

                <div className="flex w-max gap-4">
                  <Button
                    variant="filled"
                    size="lg"
                    className=" w-44 h-14 bg-[#444c58] "
                    onClick={() => {
                      setShowResult((showResult) => !showResult);
                    }}
                  >
                    Stop
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <StartTrainingMode startGame={startGame} />
            </div>
          )}{" "}
        </div>
      )}
    </div>
  );
}
