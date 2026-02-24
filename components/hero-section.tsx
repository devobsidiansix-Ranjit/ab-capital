"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center relative bg-[url('/assets/images/bg-img.jpg')] bg-cover bg-center overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E6981]/95 to-[#1E6981]/80 z-0"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-[95%] sm:w-11/12 md:w-10/12 lg:w-9/12 px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Subheading / Tagline */}
        <motion.p
          className="text-teal-300 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Expert Business Setup • Free Consultation
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-white font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] drop-shadow-md max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Start Your Business in Dubai —
          <span className="block sm:inline-block text-teal-400 mt-2 sm:mt-0 sm:ml-3">
            Fast, Simple & Affordable
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white/80 text-sm sm:text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Looking to start or expand your business?
          <span className="font-semibold text-white ml-1">AB Capital Services FZE</span> helps entrepreneurs set up with clear guidance and end-to-end support.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="#form" className="w-full sm:w-auto">
            <Button
              type="button"
              className="w-full px-8 py-6 text-sm sm:text-base font-bold text-white rounded-full shadow-lg transition-all duration-300 
                         bg-gradient-to-r from-teal-500 to-cyan-500 
                         hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
            >
              Start My Business
            </Button>
          </Link>

          <Link href="tel:+971523655193" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full px-8 py-6 text-sm sm:text-base font-semibold text-white border-white/20 bg-white/5 backdrop-blur-md rounded-full hover:bg-white hover:text-[#1E6981] transition-all"
            >
              <PhoneCall className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="mt-8 text-white/50 text-[10px] uppercase tracking-widest font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Get a Free Callback in Minutes
        </motion.p>
      </motion.div>
    </section>
  );
}