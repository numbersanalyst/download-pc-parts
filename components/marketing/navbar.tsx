"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { ModeToggle } from "../theme-changer";

import logoImage from "@/public/logos/logo-dark.png";
import { Menu, X } from "lucide-react";

import { Chakra_Petch } from "next/font/google";
import clsx from "clsx";
const chakraPetch = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
});

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black sticky top-0 z-50">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <a href="#">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md opacity-25"></div>
                <Image
                  src={logoImage}
                  alt="Saas logo"
                  className="h-12 w-12 relative"
                />
              </div>
              <div className="flex flex-col text-white select-none">
                <span
                  className={clsx(
                    "font-medium leading-tight text-xl",
                    chakraPetch.className
                  )}
                >
                  Download
                </span>
                <span
                  className={clsx(
                    "font-medium leading-tight text-gray-300",
                    chakraPetch.className
                  )}
                >
                  PC Parts
                </span>
              </div>
            </div>
          </a>
          <button
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
          {/* Computer menu */}
          <nav className="gap-4 md:gap-6 items-center hidden md:flex">
            <a
              href="#companies"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Companies
            </a>
            <a
              href="#features"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#customers"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <a
              href="#app"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              App
            </a>
            <a
              href="#faq"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              FAQ
            </a>
            <ModeToggle />
            <Link
              href={"/configure"}
              scroll={false}
              className="bg-white py-2 px-4 rounded-lg dark:text-black"
            >
              Get for free
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-white border-opacity-10">
          <div className="flex flex-col px-4 py-2">
            <a
              href="#companies"
              className="text-white py-3 border-b border-white border-opacity-10"
            >
              Companies
            </a>
            <a
              href="#features"
              className="text-white py-3 border-b border-white border-opacity-10"
            >
              Features
            </a>
            <a
              href="#customers"
              className="text-white py-3 border-b border-white border-opacity-10"
            >
              Customers
            </a>
            <a
              href="#app"
              className="text-white py-3 border-b border-white border-opacity-10"
            >
              App
            </a>
            <a
              href="#faq"
              className="text-white py-3 border-b border-white border-opacity-10"
            >
              FAQ
            </a>
            <div className="py-3 flex items-center gap-x-6">
              <ModeToggle />
              <Link
                href={"/configure"}
                scroll={false}
                className="block w-full bg-white py-2 px-4 rounded-lg text-center dark:text-black"
              >
                Get for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
