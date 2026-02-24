"use client";

import { Users, Smile, FileCheck, Rocket, Building, Globe, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users size={32} className="text-white sm:w-10 sm:h-10" />,
      value: "100+",
      label: "Dedicated Team",
      gradient: "bg-gradient-to-br from-[#1C6880] to-[#0E4A5C]",
    },
    {
      icon: <Smile size={32} className="text-white sm:w-10 sm:h-10" />,
      value: "23,000+",
      label: "Happy Customers",
      gradient: "bg-gradient-to-br from-[#1C6880] to-[#0E4A5C]",
    },
    {
      icon: <FileCheck size={32} className="text-white sm:w-10 sm:h-10" />,
      value: "4,500+",
      label: "Audit Completed",
      gradient: "bg-gradient-to-br from-[#1C6880] to-[#0E4A5C]",
    },
  ];

  const clientTypes = [
    { name: "Entrepreneurs & Startups", icon: Rocket },
    { name: "SMEs & Growing Businesses", icon: Building },
    { name: "International Investors", icon: Globe },
    { name: "E-commerce & Services", icon: ShoppingBag },
  ];

  return (
    <section className="relative my-12 lg:my-24 py-12 lg:py-20 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1C6880] mb-4">
            Our Numbers Speak for Themselves
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you’re starting fresh or expanding, our team ensures a smooth and stress-free experience.
          </p>
        </div>

        {/* Stats & Experience Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-center mb-24">
          <div className="xl:col-span-3 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${stat.gradient} rounded-2xl shadow-xl p-6 lg:p-8 w-full sm:w-52 lg:w-64 flex flex-col items-center justify-center text-center`}
              >
                <div className="mb-4 p-3 bg-white/10 rounded-xl">{stat.icon}</div>
                <h3 className="text-white text-3xl font-extrabold mb-1">{stat.value}</h3>
                <p className="text-teal-50 text-sm font-medium opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center xl:text-right"
          >
            <div className="text-[#1C6880] text-6xl font-black leading-none">
              15<span className="text-teal-500">+</span>
            </div>
            <div className="text-[#1C6880] text-2xl font-light italic mb-2">Years</div>
            <p className="text-gray-600 font-semibold uppercase tracking-wider text-sm">Of Excellence</p>
          </motion.div>
        </div>

        {/* --- Who We Help Block --- */}
        <div className="border-t border-gray-100 pt-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-bold text-[#1C6880] mb-4">Who We Help</h3>
              <p className="text-gray-600 leading-relaxed">
                Our expertise is tailored to support a wide range of business needs, from local setups to global expansions.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {clientTypes.map((type, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-teal-50/50 border border-teal-100/50 hover:bg-teal-50 transition-colors group"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    <type.icon size={24} className="text-[#1C6880]" />
                  </div>
                  <span className="font-bold text-gray-800">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}