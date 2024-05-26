"use client";
import Image from "next/image";
import Link from "next/link";
import Profile from "../assets/profile.svg";
import Login from "./Login";
import { useState } from "react";
import Register from "./Register";
import { useRouter } from "next/navigation";
import IconRegister from "../assets/register_icon.svg";
import DumbCat from "../assets/CatDumb.png"
import { Avatar, Typography, Badge } from "@material-tailwind/react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

export default function Navbar() {
  const Router = useRouter();
  const [loginState, setLogin] = useState(false);
  const [registerState, setRegister] = useState(false);

  const toggleLogin = () => {
    setLogin((loginState) => !loginState);
  };
  const toggleRegister = () => {
    setRegister((registerState) => !registerState);
  };

  return (
    <header className="w-full bg-corheader text-white py-1">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <div className="flex justify-around items-center gap-14">
          <div>
            <Link href={"/"}>
              <button className=" text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-500">
                MathType
              </button>
            </Link>
          </div>

          <div className="flex flex-row gap-5">
            <button
              onClick={toggleLogin}
              className=" flex items-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700"
            >
              <Image src={Profile} alt="perfil" />
              <span>Login</span>
            </button>


            <button
              onClick={toggleRegister}
              className=" flex items-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700"
            >
              <Image src={IconRegister} alt="IconRegister" />
              <span>Register</span>
            </button>

           {/*  <div className="flex items-center gap-4">
              <Popover
                placement="bottom"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Badge
                  placement="top-end"
                  overlap="circular"
                  color="green"
                  withBorder
                >
                  <PopoverHandler>
										<Image
											src={DumbCat}
											alt="CatProfile"
											height={46}
											width={46}
											withBorder={true}
											color="green"
       								className=" cursor-pointer p-0.5 border-2 border-green-500 rounded-md"
										/>
                  </PopoverHandler>
                  <PopoverContent className="w-72">
                    <List className="p-0">
                      <a
                        href="#"
                        className="text-initial font-medium text-blue-gray-500"
                      >
                        <ListItem>
                          <ListItemPrefix>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              >
                                <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21" />
                              </g>
                            </svg>
                          </ListItemPrefix>
                          My Profile
                        </ListItem>
                      </a>
                      <a
                        href="#"
                        className="text-initial font-medium text-blue-gray-500"
                      >
                        <ListItem className="text-red-800">
                          <ListItemPrefix>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="none"
                                stroke="#ff5757"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M23.992 6H6v36h18m9-9l9-9l-9-9m-17 8.992h26"
                              />
                            </svg>
                          </ListItemPrefix>
                          Logout
                        </ListItem>
                      </a>
                    </List>
                  </PopoverContent>
                </Badge>
                <div>
                  <Typography variant="h6">Phurtou</Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    ID #77546
                  </Typography>
                </div>
              </Popover>
            </div> */}
          </div>
        </div>
      </div>
      <Login
        isOpen={loginState}
        closeForm={toggleLogin}
        toggleRegister={toggleRegister}
      />
      <Register
        isOpen={registerState}
        closeForm={toggleRegister}
        toggleLogin={toggleLogin}
      />
    </header>
  );
}
