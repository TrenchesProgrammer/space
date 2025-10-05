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
interface destinationTabProps{
  name:string;
  text:string;
  distance:string;
  destinationTime:string;
}
const DestinationTab = ({name, text, distance, destinationTime}:destinationTabProps) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-8 items-center lg:items-start ">
      <h2
        className={`text-[56px] max-h-[95px] md:text-[80px] ${bellefair.className} text-white`}
      >
        {name}
      </h2>
      <p
        className={`${barlow.className} text-[#D0D6F9] text-center lg:text-left text-[15px] md:text-[16px] `}
      >
        {text}
      </p>
      <div className="border-white/25 w-full border-t " />
      <div className="flex flex-col md:flex-row text-center gap-3 md:gap-20">
        <div className="text-center whitespace-nowrap lg:text-left">
          <p
            className={`${barlowCondensed.className} tracking-[3] text-[14px] text-[#D0D6F9]`}
          >
            AVG. DISTANCE
          </p>
          <p className={`${bellefair.className} text-[28px]`}>{distance}</p>
        </div>
        <div className="text-center whitespace-nowrap lg:text-left">
            <p className={`${barlowCondensed.className} tracking-[3] text-[14px] text-[#D0D6F9]`}>
                EST. TRAVEL TIME
            </p>
            <p className={`${bellefair.className} text-[28px]`}>{destinationTime}</p>
        </div>
      </div>


    </div>
  );
};

export default DestinationTab;
