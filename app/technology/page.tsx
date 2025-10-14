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
      <div className="w-full p-5">
        <p className={`${barlowCondensed.className} text-[16px] md:text-[20px] tracking-widest`}><span className="text-bold text-white/25">03</span> SPACE LAUNCH 101</p>
      </div>
      <div className="flex flex-1 flex-col lg:flex-row-reverse gap-3 lg:pt-10 lg:pl-10 pb-10">
          <div className="bg-launch-vehicle-landscape h-[250px] lg:h-full lg:bg-launch-vehicle-portrait bg-center bg-no-repeat w-full lg:w-[40%] bg-cover "/>
          <div className="flex justify-center items-center lg:h-full lg:w-[55%] lg:flex-row p-5 lg:p-0">
            <div className="flex h-fit flex-col lg:flex-row gap-5 lg:gap-10 lg:p-5">
              <div className="flex lg:flex-col gap-5 lg:gap-0 justify-center lg:justify-between ">
                {["1", "2", "3"].map((item, index)=>(<div
                key={index}
                onClick={() => {
                  setTechTab(item);
                }}
                className={`w-10 h-10 md:h-13 md:w-13 lg:w-15 lg:h-15 cursor-pointer ${
                  techTab == item
                    ? "bg-white text-[#0B0D17]"
                    : "border border-white/25"
                }  rounded-full ${
                  bellefair.className
                } text-2xl flex items-center justify-center`}
              >
                {item}
              </div>))}
              </div>
              <div className="flex flex-col gap-1 text-center lg:text-left">
                <p className={`${bellefair.className} text-md text-white/50`}>THE TERMINOLOGY…</p>
                <p className={`${bellefair.className} text-2xl `}>LAUNCH VEHICLE</p>
                <p className={`${barlow.className} flex items-center min-h-[144px] text-[#D0D6F9] `}>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&apos;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&apos;s quite an awe-inspiring sight on the launch pad!</p>
              </div>              
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default Technology;
