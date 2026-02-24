"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer1() {
  return (
    <footer className="bg-black text-white">
      {/* --- STRONG CTA SECTION --- */}
      <div className="bg-[#0b5b6d] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let’s Build Your Business in Dubai
            </h2>
            <p className="text-teal-50 text-lg opacity-90">
              AB Capital Services FZE — Your One-Stop Solution for Business Setup & Growth in the UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="tel:+971523655193"
              className="flex items-center justify-center gap-2 bg-white text-[#0b5b6d] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone size={20} />
              Speak to an Expert Now
            </a>
            <a
              href="/#form"
              className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold border border-black hover:bg-gray-900 transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare size={20} />
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN FOOTER --- */}
      <div className="py-16">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Image
              src="/assets/images/logo.png"
              alt="AB Capital Logo"
              width={200}
              height={60}
              className="brightness-0 invert opacity-90" // Ensures logo is visible on black
            />
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Empowering international investors and local startups with ethical, transparent, and reliable business solutions in the heart of Dubai.
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-5 text-sm">
            <h4 className="font-bold text-[#0b5b6d] uppercase tracking-widest text-xs">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+971523655193" className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-900 rounded-full group-hover:bg-[#0b5b6d] transition-colors">
                  <Phone size={16} className="text-[#0b5b6d] group-hover:text-white" />
                </div>
                <span className="group-hover:text-[#0b5b6d] transition-colors">+971-523655193</span>
              </a>
              <a href="tel:+971585857119" className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-900 rounded-full group-hover:bg-[#0b5b6d] transition-colors">
                  <Phone size={16} className="text-[#0b5b6d] group-hover:text-white" />
                </div>
                <span className="group-hover:text-[#0b5b6d] transition-colors">+971-585857119</span>
              </a>
              <a href="mailto:info@abcapital.ae" className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-900 rounded-full group-hover:bg-[#0b5b6d] transition-colors">
                  <Mail size={16} className="text-[#0b5b6d] group-hover:text-white" />
                </div>
                <span className="group-hover:text-[#0b5b6d] transition-colors">info@abcapital.ae</span>
              </a>
            </div>
          </div>

          {/* Address & Social */}
          <div className="flex flex-col items-center md:items-end gap-6 text-sm">
            <div className="text-center md:text-right space-y-2">
              <h4 className="font-bold text-[#0b5b6d] uppercase tracking-widest text-xs">Visit Our Office</h4>
              <p className="text-gray-400 leading-relaxed max-w-[240px]">
                Office No 404, Al Tawhidi Building, Bank Street, Bur Dubai, UAE
              </p>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center text-[10px] text-gray-600 max-w-2xl mx-auto px-4 uppercase tracking-tighter">
          Disclaimer: Our services are private consultancy solutions and are not affiliated with any government authority.
          We provide expert guidance to facilitate your business journey.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AB Capital Services FZE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}