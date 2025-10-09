"use client";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
// import Image from "next/image";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});
const Technology = () => {
  const [techTab, setTechTab] = useState("1");
  return (
    <div className="bg-technology-mobile flex flex-col  md:bg-technology-tablet lg:bg-technology-desktop bg-cover h-[100dvh] w-[100dvw]">
      <Navbar />
      <div className="flex flex-1 py-5 flex-col gap-5 ">
        <div className="flex flex-col flex-1 justify-between max-h-[50%]">
          <p
            className={`${barlowCondensed.className} text-white text-lg text-center`}
          >
            <span>03</span> SPACE LAUNCH 101
          </p>
          <div className="h-[30vh] w-[100vw] bg-launch-vehicle-landscape bg-center bg-no-repeat" />
          <div className="flex gap-5 justify-center px-15">
            <div
              onClick={() => {
                setTechTab("1");
              }}
              className={`w-10 h-10 cursor-pointer ${
                techTab == "1"
                  ? "bg-white text-[#0B0D17]"
                  : "border border-white/25"
              }  rounded-full ${
                bellefair.className
              } text-2xl flex items-center justify-center`}
            >
              1
            </div>
            <div
              onClick={() => {
                setTechTab("2");
              }}
              className={`w-10 h-10 cursor-pointer ${
                techTab == "2"
                  ? "bg-white text-[#0B0D17]"
                  : "border border-white/25"
              }  rounded-full ${
                bellefair.className
              } text-2xl flex items-center justify-center`}
            >
              2
            </div>
            <div
              onClick={() => {
                setTechTab("3");
              }}
              className={`w-10 h-10 cursor-pointer ${
                techTab == "3"
                  ? "bg-white text-[#0B0D17]"
                  : "border border-white/25"
              }  rounded-full ${
                bellefair.className
              } text-2xl flex items-center justify-center`}
            >
              3
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="px-5 flex flex-col gap-2">
            <p
              className={`${bellefair.className} text-lg text-white/50 text-center`}
            >
              THE TERMINOLOGY
            </p>
            <p className={`${bellefair.className} text-2xl text-center`}>
              LAUNCH VEHICLE
            </p>
            <p className={`${barlow.className} text-center text-[#D0D6F9]`}>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it&apos;s quite
              an awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
