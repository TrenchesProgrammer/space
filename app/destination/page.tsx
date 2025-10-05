import React from "react";
import Navbar from "../Components/Navbar";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
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
    <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover h-[100dvh] w-[100dvw]">
      <Navbar />
      <div className="flex flex-col mt-6 gap-10">
        <div
          className={`${barlowCondensed.className} flex justify-center tracking-[3]`}
        >
          <p>
            <span className="opacity-25 m-5">01</span> PICK YOUR DESTINATION
          </p>
        </div>
        <div className="flex flex-col px-7 gap-7 items-center">
          <Image alt="moon" src="/image-moon.webp" height={150} width={150} />
          <div
            className={`${barlowCondensed.className} text-[#D0D6F9] tracking-[3] flex flex-row text-[14px] gap-7`}
          >
            <p>MOON</p>
            <p>MARS</p>
            <p>EUROPA</p>
            <p>TITAN</p>
          </div>
          <h2
            className={`text-[56px] md:text-[80px] ${bellefair.className} text-white`}
          >
            MOON
          </h2>
          <p className={`${barlow.className} text-[#D0D6F9] text-center text-[15px] md:text-[16px] lg:w-[50%]`}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="border-white w-full border-t "/>
        </div>
      </div>
    </div>
  );
};

export default page;
