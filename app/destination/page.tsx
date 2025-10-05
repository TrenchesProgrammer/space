import React from "react";
import Navbar from "../Components/Navbar";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
import DestinationTab from "../Components/DestinationTab";
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
const page = () => {
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
        <div className="flex flex-col flex-1 px-7 justify-around h-full items-center">
          <Image
            alt="moon"
            src="/image-moon.webp"
            height={150}
            width={150}
            className="md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px] "
          />
          <div className="flex flex-col items-center">
            <div
              className={`${barlowCondensed.className} text-[#D0D6F9] tracking-[3] flex flex-row text-[14px] gap-7`}
            >
              <p>MOON</p>
              <p>MARS</p>
              <p>EUROPA</p>
              <p>TITAN</p>
            </div>
            <DestinationTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
