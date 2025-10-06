"use client";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import CrewTab from "../Components/CrewTab";
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});
const Crew = () => {
  const [crewTab, setCrewTab] = useState("douglas");
  return (
    <div className="bg-crew-mobile flex flex-col  md:bg-crew-tablet lg:bg-crew-desktop bg-cover h-[100dvh] w-[100dvw]">
      <Navbar />
      <div className="flex flex-col mt-6 gap-5 flex-1 md:px-30">
        <div
          className={`${barlowCondensed.className} flex justify-center md:justify-start tracking-[3]`}
        >
          <p className="text-white text-[16px] md:text-[20px]">
            <span className="opacity-25 m-5">02</span> MEET YOUR CREW
          </p>
        </div>
        <div className="flex flex-col flex-1 px-7 justify-around lg:flex-row h-full items-center">
          <div className="flex flex-col lg:w-[40%] items-center lg:items-start">
            {crewTab == "moon" && (
              <CrewTab
                name="MOON"
                text="       See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites."
                distance="384,400 KM"
                destinationTime="3 DAYS"
              />
            )}
            {crewTab == "mars" && (
              <CrewTab
                name="MARS"
                text="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                distance="225 MIL. KM"
                destinationTime="9 MONTHS"
              />
            )}
            {crewTab == "europa" && (
              <CrewTab
                name="EUROPA"
                text="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                distance="628 MIL. KM"
                destinationTime="3 YEARS"
              />
            )}
            {crewTab == "titan" && (
              <CrewTab
                name="TITAN"
                text="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                distance="1.6 BIL. KM"
                destinationTime="7 YEARS"
              />
            )}
            <div
              className={`${barlowCondensed.className} text-[#D0D6F9] tracking-[3] flex flex-row text-[14px] gap-7`}
            >
              <div
                onClick={() => {
                  setCrewTab("douglas");
                }}
                className={` w-[10px] h-[10px] rounded-full ${
                  crewTab == "douglas" ? "bg-white" : "bg-white/17"
                }  cursor-pointer`}
              ></div>
              <div
                onClick={() => {
                  setCrewTab("mark");
                }}
                className={` w-[10px] h-[10px] rounded-full ${
                  crewTab == "mark" ? "bg-white" : "bg-white/17"
                }  cursor-pointer`}
              ></div>
              <div
                onClick={() => {
                  setCrewTab("victor");
                }}
                className={` w-[10px] h-[10px] rounded-full ${
                  crewTab == "victor" ? "bg-white" : "bg-white/17"
                }  cursor-pointer`}
              ></div>
              <div
                onClick={() => {
                  setCrewTab("anousheh");
                }}
                className={` w-[10px] h-[10px] rounded-full ${
                  crewTab == "anousheh" ? "bg-white" : "bg-white/17"
                }  cursor-pointer`}
              ></div>
            </div>
          </div>
          <div className="relative  overflow-hidden w-[230px] h-[270px] mx-auto mt-6 
                md:w-[300px] md:h-[400px] 
                lg:w-[450px] lg:h-[550px]">
          <Image
            alt="crew mate"
            src={`/image-${crewTab}.webp`}
            fill
            className=" [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] "
          />   
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Crew;
