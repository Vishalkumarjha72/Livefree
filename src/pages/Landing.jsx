import React from "react";
import Navbar from "../containers/navbar/Navbar";
import { NavLink } from "react-router-dom";
import hero from '../assets/hero.png'
import image from "../assets/image.webp";
import { GiBrain } from "react-icons/gi";
import { BiBody } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
// import {TfiFaceSmile} from 'react-icons/tfi'

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-screen flex h-screen pt-20">
        <div className=" w-[45%] ml-20 text-center">
          <div className="items-center w-full h-full flex flex-col justify-center my-10 ">
            <h1 className="text-black font-bold text-6xl justify-center text-start self-start">
              #1 Meditation App
              <br /> to Release Stress
            </h1>
            <p className="text-gray-700 text-xl justify-center text-start my-10 mr-20 ">
              A life Changing personal approach to your mental well-being. Calm
              your body and mind with personlized Meditation & Music
            </p>

            <div className="flex w-1/2 justify-between self-start items-start ">
              <div className="flex items-center relative ">
                <GoPrimitiveDot className="text-[rgb(215,152,62)] text-6xl absolute -top-4 right-5 -z-10" />
                <GiBrain className="text-5xl p-1 relative text-gray-800" />
                <span className="relative font-bold"> Relax </span>
              </div>

              <div className="flex items-center relative">
                <GoPrimitiveDot className="text-[rgb(215,152,62)] text-6xl absolute -top-4 right-10 -z-10" />
                <BiBody className="text-5xl p-1] text-gray-800" />
                <span className="relative font-bold"> Healthy </span>
              </div>
              
            </div>

            <NavLink
              to="/contact"
              className="py-4 px-14 bg-[rgb(215,152,62)] shadow-xl my-10 self-start rounded-bl-[2rem] rounded-tr-[2rem]"
            >
              <p className="text-white uppercase font-bold  ">Contact Us !!!</p>
            </NavLink>
          </div>
        </div>
        <div className="w-[55%] h-full mr-20 flex items-center justify-center">
          <img
            src={image}
            alt="hero_image "
            className="object-contain w-full h-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
