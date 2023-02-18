import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./navbar.scss"
import {GiMeditation} from 'react-icons/gi'

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isServiceMenu, setIsServiceMenu] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isSession, setIsSession] = useState(false);

  const onClickService = () => {
    setIsProfile(false);
    setIsSession(false);
    setIsServiceMenu((prevState) => !prevState);
  };
  const onClickProfile = () => {
    setIsServiceMenu(false);
    setIsSession(false);
    setIsProfile((prevState) => !prevState);
  };
  const onClickSession = () => {
    setIsServiceMenu(false);
    setIsProfile(false);
    setIsSession((prevState) => !prevState);
  };

  return (
    <nav className="w-full py-4 px-10 flex fixed top-0 left-0 z-50">
      <div className="w-full flex items-center justify-between  ">
        <div className="flex justify-center items-center">
          <GiMeditation className="text-5xl text-[rgb(215,152,62)]"/>
          <NavLink className="ml-4 brand-text text-2xl font-semibold" to="/">
            Live Free
          </NavLink>
        </div>
        <div className="hidden md:flex justify-center items-center gap-10 lg:gap-20 ">
          <button
            className="flex items-center h-[50px] justify-center relative "
            onClick={onClickService}
          >
            <h3>Services</h3>
            <div className="ml-2 mt-1">
              {isServiceMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isServiceMenu && (
              <div className="absolute top-12 -left-[100%] bg-[#FFBC60] w-[200px] rounded-lg">
                <h3 className="text-white hover:bg-[rgb(215,152,62)] w-full py-3 px-6 rounded-tr-lg rounded-tl-lg text-start">
                  <NavLink to="/chat">Chat</NavLink>
                </h3>
                <h3 className="text-white hover:bg-[rgb(215,152,62)] w-full py-3 px-6 rounded-br-lg rounded-bl-lg text-start">
                  <NavLink to="/blog">Blog</NavLink>
                </h3>
              </div>
            )}
          </button>

          <button
            className="flex items-center h-[50px] justify-center relative"
            onClick={onClickSession}
          >
            <h3>Session</h3>
            <div className="ml-2 mt-1">
              {isSession ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isSession && (
              <div className="absolute top-12 -right-[100%] bg-[#FFBC60] w-[200px] rounded-lg ">
                <h3 className="text-white w-full hover:bg-[rgb(215,152,62)] py-3 px-6 rounded-tl-lg rounded-tr-lg text-start">
                  <NavLink to="/therapies">Therapies </NavLink>
                </h3>

                <h3 className="text-white w-full hover:bg-[rgb(215,152,62)] py-3 px-6 rounded-bl-lg rounded-br-lg text-start">
                  <NavLink to="/blog">more</NavLink>
                </h3>
              </div>
            )}
          </button>

          <NavLink to="/about" className="">
            About
          </NavLink>

          <button
            className="flex items-center h-[50px] justify-center relative"
            onClick={onClickProfile}
          >
            Profile icon
            <div className="ml-2 mt-1">
              {isProfile ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isProfile && (
              <div className="absolute top-12 right-[100] bg-[#FFBC60] w-[200px] rounded-lg  ">
                <h3 className="text-white hover:bg-[rgb(215,152,62)] w-full py-3 px-6 text-start rounded-tr-lg rounded-tl-lg">
                  <NavLink to="/account">Account</NavLink>
                </h3>

                <h3 className="text-white hover:bg-[rgb(215,152,62)] w-full py-3 px-6 text-start ">
                  <NavLink to="/dashborad">dashborad </NavLink>
                </h3>
                <h3 className="text-white hover:bg-[rgb(215,152,62)] w-full py-3 px-6 text-start rounded-bl-lg rounded-br-lg">
                  <button>Log Out</button>
                </h3>
              </div>
            )}
          </button>

          <NavLink
            to="/contact"
            className="py-4 px-14 bg-[rgb(215,152,62)] shadow-xl rounded-bl-[2rem] rounded-tr-[2rem]"
          >
            <p className="text-white uppercase font-bold  ">Try for Free</p>
          </NavLink>
        </div>

        <div className="md:hidden block cursor-pointer">
          <FiMenu onClick={() => setIsMenu(true)} size={25} />
        </div>
        <AnimatePresence>
          {isMenu && (
            <div className="absolute top-0 left-0 w-[100%]">
              <div
                onClick={() => setIsMenu(false)}
                className="absolute w-screen h-screen backdrop-blur-sm top-0 right-0"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute top-4 right-4 flex flex-col bg-[#d6d6d6] p-4 w-1/2 sm:w-1/3 rounded-md shadow-2xl"
              >
                <div className="flex items-start justify-between ">
                  <div className="flex flex-col gap-4 w-4/5">
                    <NavLink to="/home" className="">
                      Home
                    </NavLink>

                    <button
                      className="text-start flex "
                      onClick={onClickService}
                    >
                      Services
                      <div className="mt-1.5 ml-2">
                        {isServiceMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </button>

                    {isServiceMenu && (
                      <div className="flex flex-col w-full ">
                        <NavLink
                          to="/chat"
                          className="bg-[#FFBC60] w-full text-white py-2 px-4 rounded-tr-lg rounded-tl-lg hover:bg-[rgb(215,152,62)]"
                        >
                          chat
                        </NavLink>
                        <NavLink
                          to="/blog"
                          className="bg-[#FFBC60] text-white w-full py-2 px-4 rounded-br-lg rounded-bl-lg  hover:bg-[rgb(215,152,62)]"
                        >
                          blog
                        </NavLink>
                      </div>
                    )}

                    <button
                      className="text-start flex"
                      onClick={onClickSession}
                    >
                      Session
                      <div className="mt-1.5 ml-2">
                        {isSession ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </button>
                    {isSession && (
                      <div className="flex flex-col w-full">
                        <NavLink
                          to="/therapies"
                          className="bg-[#FFBC60] w-full text-white py-2 px-4 rounded-tr-lg rounded-tl-lg hover:bg-[rgb(215,152,62)]"
                        >
                          Therapies
                        </NavLink>
                        <NavLink
                          to="/more"
                          className="bg-[#FFBC60] text-white w-full py-2 px-4 rounded-br-lg rounded-bl-lg  hover:bg-[rgb(215,152,62)]"
                        >
                          More
                        </NavLink>
                      </div>
                    )}

                    <NavLink to="/about" className="">
                      About
                    </NavLink>

                    <button
                      className="text-start flex"
                      onClick={onClickProfile}
                    >
                      Profile Icon
                      <div className="mt-1.5 ml-2">
                        {isProfile ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </button>
                    {isProfile && (
                      <div className="flex-col flex w-full">
                        <NavLink
                          to="/account"
                          className="bg-[#FFBC60] text-white w-full py-2 px-4 rounded-tr-lg rounded-tl-lg hover:bg-[rgb(215,152,62)]"
                        >
                          Account
                        </NavLink>
                        <NavLink
                          to="/dashboard"
                          className="px-4 py-2 bg-[#FFBC60] text-white hover:bg-[rgb(215,152,62)]"
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to="/logout"
                          className="bg-[#FFBC60] text-white w-full py-2 px-4 rounded-br-lg rounded-bl-lg  hover:bg-[rgb(215,152,62)]"
                        >
                          Log Out
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <RiCloseFill
                    className="cursor-pointer w-1/5"
                    onClick={() => setIsMenu(false)}
                    size={25}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navbar;
