"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar w-full shadow-xl flex justify-between px-6 py-4 items-center bg-white">
        <Link href="/">
          <div className="logo flex items-center gap-x-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width="50"
              height="50"
              className="bg-transparent border-none border-white"
            />
            <p className="text-xl">Fatima Sumair</p>
          </div>
        </Link>

        <ul
          className={`links hidden md:flex md:flex-row gap-x-4 lg:gap-x-12 text-lg items-center m-0`}
        >
          <li className="link">
            <Link href="/work" className="block md:inline-block px-4 py-2">
              Work
            </Link>
          </li>
          <li className="link">
            <Link href="/about" className="block md:inline-block px-4 py-2">
              About
            </Link>
          </li>
          <li className="link">
            <Link
              href="/testimonials"
              className="block md:inline-block px-4 py-2"
            >
              Testimonials
            </Link>
          </li>
          <li className="link link-btn bg-[#E9EE8A] inline-block px-8 py-2 rounded-2xl hover:border-t-4 hover:border-l-4 hover:border-b-0 hover:border-r-0 border-b-4 border-r-4 border-black ">
            <Link href="/#form" className="block md:inline-block">
              Start a Project
            </Link>
          </li>
        </ul>
        <div
          className="md:hidden flex flex-col w-[2rem] h-[2rem] justify-around"
          onClick={toggleDiv}
        >
          <span
            className={`w-full h-[2.5px] bg-black transform ${
              isOpen ? "" : "rotate-45 translate-y-2"
            }`}
          ></span>
          <span
            className={`w-full h-[2.5px] bg-black transform ${
              isOpen ? "" : "hidden"
            }`}
          ></span>
          <span
            className={`w-full h-[2.5px] bg-black transform ${
              isOpen ? "" : "-rotate-45 -translate-y-2"
            }`}
          ></span>
        </div>
      </nav>
      {!isOpen && (
        <div className="nav-mob back-cream rounded-lg w-[80%] m-auto py-6 px-3 absolute top-20 z-10 left-[50%] transform -translate-x-1/2 shadow-xl shadow-slate-700">
          <ul className={`links flex flex-col gap-x-4 lg:gap-x-12 text-lg m-0`}>
            <li className="link">
              <Link href="/work" className="block md:inline-block px-4 py-2">
                Work
              </Link>
            </li>
            <li className="link">
              <Link href="/about" className="block md:inline-block px-4 py-2">
                About
              </Link>
            </li>
            <li className="link">
              <Link
                href="/testimonials"
                className="block md:inline-block px-4 py-2"
              >
                Testimonials
              </Link>
            </li>
            <li className="link flex gap-x-4 px-4 pt-3">
              <div>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/fatima-sumair-479b35150/"
                >
                  <Image
                    className="w-10 cursor-pointer"
                    src="/assets/home/linkedin_logo.png"
                    alt="linkedin"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://www.behance.net/fatimasumair"
                >
                  <Image
                    className="w-10 cursor-pointer"
                    src="/assets/home/logo2.png"
                    alt="logo2"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div>
                <Link target="_blank" href="https://medium.com/@fatimasumair">
                  <Image
                    className="w-10 cursor-pointer"
                    src="/assets/home/logo3.png"
                    alt="logo3"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
