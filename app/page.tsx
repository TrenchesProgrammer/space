import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
import React from "react";
import Navbar from "./Components/Navbar";
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
const Home = () => {
  return (
    <div className=" bg-home-mobile md:bg-home-tablet flex flex-col lg:bg-home-desktop bg-cover h-[100vh] w-[100vw] ">
      <Navbar />
      <div className="p-7 flex flex-1 flex-col items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          <p
            className={`${barlowCondensed.className} whitespace-nowrap text-md tracking-[3]`}
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h2 className={`text-[85px] ${bellefair.className}`}>SPACE</h2>
          <p
            className={`${barlow.className} text-[#D0D6F9] text-md text-center`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-white text-black rounded-full h-45 w-45 flex justify-center items-center hover:scale-110 ease-in duration-300 cursor-pointer">
          <p className={`${bellefair.className} text-2xl tracking-[2px]`}>
            EXPLORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
