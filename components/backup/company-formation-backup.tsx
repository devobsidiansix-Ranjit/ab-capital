'use client'

import { Landmark, Ratio, MonitorDot, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CompanyFormationSection() {
  const cards = [
    {
      icon: Landmark,
      title: 'Mainland Company Formation',
      text: `Mainland company formation in the UAE refers to establishing your business within the jurisdiction governed by the respective Emirates' Department of Economic Development (DED). These companies are also known as onshore companies.`,
      bgImage: '/assets/images/card-bg-img.jpg'
    },
    {
      icon: Ratio,
      title: 'Free Zone Company Formation',
      text: `Freezone company formation, on the other hand, involves setting up your business within designated free trade zones across the UAE. Each free zone is designed to cater to specific industries and business types.`,
      bgImage: '/assets/images/card-bg-img.jpg'
    },
    {
      icon: MonitorDot,
      title: 'Off Shore Company Formation',
      text: `Offshore company formation in the UAE is easy and strategic, ensuring a smooth setup for international business expansion. AB Capital, with its expertise and support, facilitates the seamless creation of offshore companies in the UAE.`,
      bgImage: '/assets/images/card-bg-img.jpg'
    }
  ]

  return (
    <section className="w-[90%] sm:w-[80%] mx-auto my-20 flex flex-col gap-6">
      {/* Heading */}
      <h2 className="text-[#064B5F] uppercase font-bold sm:text-3xl text-xl text-center">
        Company Formation in the UAE
      </h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
        <strong>
          Are you looking to establish your business in the dynamic and thriving business landscape of the United Arab Emirates?
        </strong>
        At <span className="font-semibold text-[#064B5F]">AB CAPITAL SERVICES</span>, we specialize in assisting entrepreneurs and investors like you in setting up your company with ease. In this guide, we&apos;ll explore three key options for company formation: Mainland and Freezone businesses, highlighting their differences and the unique benefits they offer.
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-3 gap-6 mt-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border border-gray-200 p-6 bg-white hover:text-white overflow-hidden transition-all duration-500"
          >
            {/* Background Image (hidden until hover) */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            ></div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-[#064B5F]/80 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <card.icon className="text-[#064B5F] group-hover:text-white w-10 h-10 transition-colors duration-300" />
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.text}</p>

              {/* Button */}
              <Link
                href="#"
                className="flex items-center gap-2 bg-[#064B5F] group-hover:bg-white text-white group-hover:text-[#064B5F] font-semibold mt-4 px-4 py-2 rounded-full transition-colors duration-300 shadow-md"
              >
                Get Free Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

