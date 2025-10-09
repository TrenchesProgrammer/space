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
interface CrewTabProps {
  name: string;
  about: string;
  position: string;
}
const CrewTab = ({ name, about, position }: CrewTabProps) => {
  return (
    <div className="flex flex-col gap-2  lg:gap-4 items-center lg:items-start ">
      <div className="flex flex-col gap-0  items-center lg:items-start">
        <p className={`${bellefair.className} text-xl text-white/50`}>{position}</p>
        <h2
          className={`text-[36px] whitespace-nowrap  md:text-[3.2vw] ${bellefair.className} text-white`}
        >
          {name}
        </h2>
      </div>

      <p
        className={`${barlow.className} text-[#D0D6F9] text-center lg:text-left text-[15px] md:text-[16px] `}
      >
        {about}
      </p>
    </div>
  );
};

export default CrewTab;
