"use client";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import DestinationTab from "../Components/DestinationTab";
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});
const Destination = () => {
  const [destinationTab, setDestinationTab] = useState("moon");
  return (
    <div className="bg-destination-mobile flex flex-col  md:bg-destination-tablet lg:bg-destination-desktop bg-cover h-[100dvh] w-[100dvw]">
      <Navbar />
      <div className="flex flex-col mt-6 gap-5 flex-1 md:px-30">
        <div
          className={`${barlowCondensed.className} flex justify-center md:justify-start tracking-[3]`}
        >
          <p className="text-white text-[16px] md:text-[20px]">
            <span className="opacity-25 m-5">01</span> PICK YOUR DESTINATION
          </p>
        </div>
        <div className="flex flex-col flex-1 px-7 justify-around lg:flex-row h-full items-center">
          <Image
            alt="moon"
            src={`/image-${destinationTab}.webp`}
            height={150}
            width={150}
            className="md:w-[300px] md:h-[300px] lg:w-[390px] lg:h-[390px] "
          />
          <div className="flex flex-col lg:w-[40%] items-center lg:items-start">
            <div
              className={`${barlowCondensed.className} text-[#D0D6F9] tracking-[3] flex flex-row text-[14px] gap-7`}
            >
              <div
                className={`py-5 ${
                  destinationTab == "moon" ? "border-b-4 border-white" : ""
                }  cursor-pointer`}
              >
                <p
                  onClick={() => {
                    setDestinationTab("moon");
                  }}
                >
                  MOON
                </p>
              </div>
              <div
                className={`py-5 ${
                  destinationTab == "mars" ? "border-b-4 border-white" : ""
                } cursor-pointer`}
              >
                <p
                  onClick={() => {
                    setDestinationTab("mars");
                  }}
                >
                  MARS
                </p>
              </div>
              <div
                className={`py-5 ${
                  destinationTab == "europa" ? "border-b-4 border-white" : ""
                }  cursor-pointer`}
              >
                <p
                  onClick={() => {
                    setDestinationTab("europa");
                  }}
                >
                  EUROPA
                </p>
              </div>
              <div
                className={`py-5 ${
                  destinationTab == "titan" ? "border-b-4 border-white" : ""
                } cursor-pointer`}
              >
                <p
                  onClick={() => {
                    setDestinationTab("titan");
                  }}
                >
                  TITAN
                </p>
              </div>
            </div>
            {destinationTab == "moon" && (
              <DestinationTab
                name="MOON"
                text="       See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites."
                distance="384,400 KM"
                destinationTime="3 DAYS"
              />
            )}
            {destinationTab == "mars" && (
              <DestinationTab
                name="MARS"
                text="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                distance="225 MIL. KM"
                destinationTime="9 MONTHS"
              />
            )}
            {destinationTab == "europa" && (
              <DestinationTab
                name="EUROPA"
                text="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                distance="628 MIL. KM"
                destinationTime="3 YEARS"
              />
            )}
            {destinationTab == "titan" && (
              <DestinationTab
                name="TITAN"
                text="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                distance="1.6 BIL. KM"
                destinationTime="7 YEARS"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
