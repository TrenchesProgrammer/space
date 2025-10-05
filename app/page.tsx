import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
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
    <main className=" bg-home-mobile md:bg-home-tablet flex flex-col lg:bg-home-desktop bg-cover overflow-hidden bg-black  h-[100dvh] w-[100dvw] ">
      <Navbar />
      <div className="p-7 lg:p-30 flex flex-1 flex-col lg:flex-row  items-center lg:items-end justify-between ">
        <div className="flex flex-col justify-center lg:w-[50%] items-center lg:items-start">
          <p
            className={`${barlowCondensed.className} whitespace-nowrap text-[16px] md:text-[28px] tracking-[3]`}
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h2 className={`text-[80px] md:text-[144px] ${bellefair.className}`}>SPACE</h2>
          <p
            className={`${barlow.className} text-[#D0D6F9] text-[15px] md:text-[17px] text-center lg:text-left`}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-white text-black rounded-full h-45 md:h-[272px] md:w-[272px] w-45 flex justify-center items-center hover:scale-110  cursor-pointer">
          <p className={`${bellefair.className} text-2xl tracking-[2px]`}>
            EXPLORE
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
