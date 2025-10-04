import { Barlow, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import React from "react";
import Navbar from "./Components/Navbar";
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  display: "auto",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
  display: "auto",
});
const Home = () => {
  return (
    <div className=" bg-home-mobile md:bg-home-tablet flex flex-col lg:bg-home-desktop bg-cover h-[100vh] w-[100vw] ">
      <Navbar />
      
    </div>
  );
};

export default Home;
