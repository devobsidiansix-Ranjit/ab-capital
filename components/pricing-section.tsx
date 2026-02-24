"use client";

import { Check, Star, LineChart, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Sharjah Freezone",
    label: "BASIC",
    visa: "0 Visa",
    price: "AED 5750",
    features: [
      "Business Advisory",
      "Zero Visa Free",
      "100% Foreign Ownership",
      "Business License",
      "MOA & AOA",
      "Free Tax/VAT Session",
      "0% withhold tax",
      "100% profit repatriation",
      "Flexi desk",
      "Dedicated Manager"
    ],
    popular: false,
    color: "from-[#1C6880] to-[#1C6880]/90"
  },
  {
    name: "Dubai Freezone",
    label: "BASIC",
    visa: "0 Visa",
    price: "AED 12500",
    features: [
      "Setup Consultation",
      "No visa Cost",
      "Full Foreign Ownership",
      "License Included",
      "MOA & AOA Provided",
      "Free Tax/VAT Session",
      "0% withhold tax",
      "Full Profit Transfer",
      "Flexible Desk Option",
      "Personal Account Manager"
    ],
    popular: false,
    color: "from-[#1C6880] to-[#1C6880]/90"
  },
  {
    name: "Rakez Freezone",
    label: "LIMITED",
    visa: "1 Free Lifetime Visa",
    price: "AED 11990",
    features: [
      "Expert Consultation",
      "1 Lifetime Visa",
      "100% Foreign Ownership",
      "Business License",
      "MOA & AOA Drafting",
      "Free Tax/VAT Session",
      "0% withhold tax",
      "100% profit repatriation",
      "Flexi desk",
      "Dedicated Manager"
    ],
    popular: true,
    color: "from-[#1C6880] to-[#1C6880]/90"
  },
  {
    name: "Dubai Mainland",
    label: "LIMITED",
    visa: "1 Visa",
    price: "AED 19990",
    features: [
      "Business Consultation",
      "1 Visa included",
      "100% Foreign Ownership",
      "Business License",
      "MOA & AOA",
      "Free Tax/VAT Session",
      "0% withhold tax",
      "100% profit repatriation",
      "Flexi desk",
      "Dedicated Manager"
    ],
    popular: false,
    color: "from-[#1C6880] to-[#1C6880]/90"
  }
];

export default function PricingSection() {
  return (
    <section className="relative my-20 py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

      <div className="relative w-[90%] sm:w-[85%] max-w-7xl mx-auto flex flex-col gap-12 z-10">
        
        {/* --- New: Business Analysis & Advisory Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1C6880]/5 border border-[#1C6880]/10 rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1C6880] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
                Strategy First
              </div>
              <h2 className="text-[#1C6880] font-bold text-3xl md:text-4xl mb-6 font-[family-name:var(--font-playfair)]">
                Business Analysis & Advisory
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Get a clear view of your business potential with our strategic analysis and advisory services. We help you make informed decisions using market insights and industry benchmarking.
              </p>
              <Link href="#form" className="group flex items-center gap-2 text-[#1C6880] font-bold hover:gap-4 transition-all">
                Request a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {[
                { icon: LineChart, title: "Business Planning Support", desc: "Crafting a roadmap for sustainable success." },
                { icon: Target, title: "Cost & Structure Optimization", desc: "Maximizing efficiency from day one." },
                { icon: TrendingUp, title: "Growth-Focused Advisory", desc: "Insights designed to scale your operations." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-[#1C6880]/10 p-3 rounded-xl text-[#1C6880]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C6880]">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Original Pricing Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <h2 className="uppercase font-bold sm:text-4xl text-2xl tracking-wide text-[#1C6880] mb-4">
            Transparent Pricing Plans
          </h2>
          <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto italic">
            Pick a setup package that fits your goals. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-[#FFD700] scale-105 z-20' 
                  : 'border-[#1C6880]/10 hover:border-[#1C6880]/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-1 rounded-full text-[10px] font-black shadow-md uppercase tracking-tighter flex items-center gap-1">
                  <Star size={12} fill="black" /> Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1C6880] mb-1">{plan.name}</h3>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{plan.visa}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C6880]">{plan.price}</span>
                <span className="text-gray-400 text-xs ml-1">/one-time</span>
              </div>

              <div className="space-y-3 mb-8 min-h-[320px]">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1C6880] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="#form">
                <Button className={`w-full font-bold py-6 rounded-xl transition-all ${
                  plan.popular 
                  ? 'bg-[#1C6880] text-white hover:bg-[#154e61]' 
                  : 'bg-white border-2 border-[#1C6880] text-[#1C6880] hover:bg-[#1C6880] hover:text-white'
                }`}>
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}