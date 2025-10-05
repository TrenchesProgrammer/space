"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});
const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={`${barlowCondensed.className} flex justify-between w-full tracking-[4] whitespace-nowrap  text-md p-6 md:p-0 md:pl-6 lg:pt-6 items-center   `}
    >
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          height={36}
          width={36}
          alt="logo"
          className="md:h-10 md:w-10"
        />
      </div>

      <div>
        <Image
          src="./icon-hamburger.svg"
          height={24}
          width={24}
          alt="menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className=" h-[100vh] w-65 absolute bottom-0 right-0  bg-white/5 backdrop-blur-2xl shadow-lg  ">
            <div className="flex justify-end mb-20">
              <Image
                src="./icon-close.svg"
                height={24}
                width={24}
                alt="close menu"
                className="mr-6 mt-6"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
            <div className="flex flex-col gap-12 ">
              <Link
                href="/"
                className={`w-full px-6 ${pathname=='/'?'border-r-4 border-r-white':''}`}
              >
                <span className="font-bold">00</span> HOME
              </Link>
              <Link
                href="/destination"
                className={`w-full px-6 ${pathname=='/destination'?'border-r-4 border-r-white':''}`}
              >
                <span className={`font-bold `}>01</span> DESTINATION
              </Link>
              <Link
                href="/crew"
                className={`w-full px-6 ${pathname=='/crew'?'border-r-4 border-r-white':''}`}
              >
                <span className="font-bold">02</span> CREW
              </Link>
              <Link
                href="/technology"
                className={`w-full px-6 ${pathname=='/technology'?'border-r-4 border-r-white':''}`}
              >
                <span className="font-bold">03</span> TECHNOLOGY
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="hidden justify-between md:flex gap-6 p-8 pl-25 bg-white/5 relative h-[75px] w-[650px] backdrop-blur-2xl shadow-lg items-center  ">
        <div className="border-t xl:block hidden  -left-[500px] absolute border-gray-500 w-135 " />
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
