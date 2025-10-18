"use client";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
// import Image from "next/image";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import TechTab from "../Components/TechTab";
const barlowCondensed = Barlow_Condensed({
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
      <div className="w-full p-2 pl-15">
        <p className={`${barlowCondensed.className} text-[16px] md:text-[20px] tracking-widest`}><span className="text-bold text-white/25">03</span> SPACE LAUNCH 101</p>
      </div>
      <div className="flex flex-1 flex-col lg:flex-row-reverse gap-3 lg:gap-8 lg:pt-15 lg:pl-15 pb-10">
          <div className={`${techTab=="1"?"bg-launch-vehicle-landscape lg:bg-launch-vehicle-portrait":""} ${techTab=="2"?"bg-spaceport-landscape lg:bg-spaceport-portrait":""} ${techTab=="3"?"bg-space-capsule-landscape lg:bg-space-capsule-portrait":""} h-[250px] lg:h-full  bg-center bg-no-repeat w-full lg:w-[38%] bg-cover `}/>
          <div className="flex justify-center items-center lg:h-full lg:w-[62%] lg:justify-start lg:flex-row p-5 lg:p-0">
            <div className="flex h-fit flex-col lg:flex-row gap-5 lg:gap-10 ">
              <div className="flex lg:flex-col gap-5 lg:gap-0 justify-center lg:justify-between">
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
              {
               techTab=="1" && <TechTab name="LAUNCH VEHICLE" description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!" />
              }
               {
               techTab=="2" && <TechTab name="SPACEPORT" description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch." />
              }
               {
               techTab=="3" && <TechTab name="SPACE CAPSULE" description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained." />
              }
            </div>
        
          </div>
      </div>
    </div>
  );
};

export default Technology;
