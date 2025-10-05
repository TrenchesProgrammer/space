import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import React from "react";
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
const DestinationTab = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-8 items-center lg:items-start ">
      <h2
        className={`text-[56px] max-h-[95px] md:text-[80px] ${bellefair.className} text-white`}
      >
        MOON
      </h2>
      <p
        className={`${barlow.className} text-[#D0D6F9] text-center lg:text-left text-[15px] md:text-[16px] `}
      >
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <div className="border-white w-full border-t " />
      <div className="flex flex-col md:flex-row text-center gap-3 md:gap-20">
        <div>
          <p
            className={`${barlowCondensed.className} tracking-[3] text-[14px] text-[#D0D6F9]`}
          >
            AVG. DISTANCE
          </p>
          <p className={`${bellefair.className} text-[28px]`}>384,400 KM</p>
        </div>
        <div className="text-left">
            <p className={`${barlowCondensed.className} tracking-[3] text-[14px] text-[#D0D6F9]`}>
                EST. TRAVEL TIME
            </p>
            <p className={`${bellefair.className} text-[28px]`}>3 DAYS</p>
        </div>
      </div>


    </div>
  );
};

export default DestinationTab;
