"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <nav className="bg-black fixed top-0 left-0 z-50 w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 py-3">
        
        {/* Left side - Logo */}
        <div className="w-24 sm:w-32 h-12 sm:h-16 relative flex-shrink-0">
          <Image
            src="/assets/images/logo.png"
            alt="AB Capital Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Right side - Button */}
        <div className="flex-shrink-0">
          <Button
            className="bg-[#1E6981] hover:bg-teal-800 text-white px-3 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-md font-medium"
            onClick={() => {
              window.location.href = '/#form';
            }}
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
}
