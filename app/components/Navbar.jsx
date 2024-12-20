"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-3xl font-bold text-white">
            <Link href="/">NEXT JS Series</Link>
          </div>

          <div className="hidden md:flex space-x-8 text-xl">
            <Link href="/dashboard">
              <p className="text-gray-500 cursor-pointer hover:text-white">
                Dashboard
              </p>
            </Link>
            <Link href="/dashboard/settings">
              <p className="text-gray-500 cursor-pointer hover:text-white">
                Settings
              </p>
            </Link>
            <Link href="/about">
              <p className="text-gray-500 cursor-pointer hover:text-white">
                About
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-500 cursor-pointer hover:text-white">
                Contact
              </p>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 focus:outline-none hover:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 p-6 bg-gray-700 text-lg rounded-md shadow-lg">
            <div className="flex flex-col space-y-2 p-4 text-center">
              <Link href="/dashboard">
                <p className="text-gray-300 cursor-pointer hover:text-white">
                  Dashboard
                </p>
              </Link>
              <Link href="/dashboard/settings">
                <p className="text-gray-300 cursor-pointer hover:text-white">
                  Settings
                </p>
              </Link>
              <Link href="/about">
                <p className="text-gray-300 cursor-pointer hover:text-white">
                  About
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-300 cursor-pointer hover:text-white">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

