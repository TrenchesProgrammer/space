"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={`${barlowCondensed.className} absolute top-0 flex justify-between w-full  pl-6 pt-6 sm:pl-12 sm:pt-12`}
    >
      <div className="flex items-center">
        <Image src="/logo.svg" height={36} width={36} alt="logo" />
      </div>

      <div className="mr-6 sm:mr-12">
        <Image
          src="./icon-hamburger.svg"
          height={24}
          width={24}
          alt="menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute top-0 right-0 h-[100vh] w-50 bg-white/5 backdrop-blur-2xl shadow-lg p-6 ">
            <div className="flex justify-end mb-20">
 <Image
              src="./icon-close.svg"
              height={22}
              width={22}
              alt="close menu"
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            </div>
           
            <p className="mb-5">
              <span className="font-bold">01</span> Home
            </p>
            <p className="mb-5">
              <span className="font-bold">02</span> Destination
            </p>
            <p className="mb-5">
              <span className="font-bold">03</span> Crew
            </p>
            <p className="mb-5">
              <span className="font-bold">04</span> Technology
            </p>
          </div>
        )}
      </div>
      <div className="hidden justify-between md:flex gap-6 p-8 pl-25 bg-white/5 relative  backdrop-blur-2xl  shadow-lg items-center text-xl h-20">
        <div className="border-t lg:block hidden  -left-[360px] absolute border-gray-500 w-96 " />
        <p>
          <span className="font-bold">01</span> Home
        </p>
        <p>
          <span className="font-bold">02</span> Destination
        </p>
        <p>
          <span className="font-bold">03</span> Crew
        </p>
        <p>
          <span className="font-bold">04</span> Technology
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
