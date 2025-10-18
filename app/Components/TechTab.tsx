import { Barlow, Bellefair } from 'next/font/google';
import React from 'react'
const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});
interface TechProps{
  name?:string,
  description?:string
}
const TechTab = ({name,description}: TechProps) => {
  return (
    <div className="flex flex-col gap-1 text-center lg:text-left">
        <p className={`${bellefair.className} text-md text-white/50`}>THE TERMINOLOGY…</p>
        <p className={`${bellefair.className} text-2xl `}>{name}</p>
        <p className={`${barlow.className} flex items-center lg:min-h-[144px] lg:max-w-[500px] text-[#D0D6F9] `}>{description}</p>
    </div>              
  )
}

export default TechTab