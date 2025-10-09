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
          <div className="flex flex-col lg:w-[40%] h-[35%] lg:h-[50%] justify-between items-center lg:items-start">
            {crewTab == "douglas" && (
              <CrewTab
                name="DOUGLAS HURLEY"
                about="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                position="COMMANDER"
              />
            )}
            {crewTab == "mark" && (
              <CrewTab
                name="MARK SHUTTLEWORTH"
                about="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                position="MISSION SPECIALIST"
                
              />
            )}
            {crewTab == "victor" && (
              <CrewTab
                name="VICTOR GLOVER"
                about="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                position="PILOT"
              />
            )}
            {crewTab == "anousheh" && (
              <CrewTab
                name="ANOUSHEH ANSARI"
                about="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
                position="FLIGHT ENGINEER"
              />
            )}
            <div
              className={`${barlowCondensed.className} text-[#D0D6F9] tracking-[3] flex flex-row text-[14px] gap-7`}
            >
              {['douglas', 'mark', 'victor', 'anousheh'].map((crew) => (
  <div
    key={crew}
    onClick={() => setCrewTab(crew)}
    className={`w-[10px] h-[10px] rounded-full ${
      crewTab === crew ? "bg-white" : "bg-white/17"
    } cursor-pointer`}
  />
))}
            </div>
          </div>
          <div className="relative  overflow-hidden w-[230px] h-[300px] mx-auto mt-6 
                md:w-[300px] md:h-[400px] 
                lg:w-[375px] lg:h-[430px]">
          <Image
            alt="crew mate"
            src={`/image-${crewTab}.webp`}
            fill
            className=" [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Crew;
