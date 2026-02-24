'use client'

import { 
  Landmark, 
  Ratio, 
  MonitorDot, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Headphones, 
  BadgeDollarSign, 
  Globe,
  UserCheck 
} from 'lucide-react'
import Link from 'next/link'

export default function CompanyFormationSection() {
  const whyChooseUs = [
    { icon: BadgeDollarSign, text: 'Low-Cost Setup Packages' },
    { icon: CheckCircle2, text: 'Expert Guidance' },
    { icon: Zap, text: 'Fast & Hassle-Free' },
    { icon: Headphones, text: 'Dedicated Manager' },
    { icon: Globe, text: 'Trusted Globally' },
    { icon: UserCheck, text: '100% Ownership Support' },
  ]

  const cards = [
    {
      icon: Landmark,
      title: 'Mainland Business Setup',
      text: `We help you choose the right business structure in the UAE Mainland, ensuring a smooth setup within DED jurisdictions for maximum trading flexibility.`,
      bgImage: '/assets/images/card-bg-img.jpg'
    },
    {
      icon: Ratio,
      title: 'Free Zone Business Setup',
      text: `Establish your brand in designated free trade zones. We help you pick the best zone based on your specific industry and budget for 100% ownership.`,
      bgImage: '/assets/images/card-bg-img.jpg'
    },
    {
      icon: MonitorDot,
      title: 'Offshore Business Solutions',
      text: `Strategic and easy setup for international expansion. AB Capital facilitates the seamless creation of offshore entities with full administrative support.`,
      bgImage: '/assets/images/card-bg-img.jpg'
    }
  ]

  return (
    <section className="w-[92%] lg:w-[85%] max-w-7xl mx-auto my-12 md:my-24 flex flex-col items-center gap-12 md:gap-20 font-[family-name:var(--font-poppins)]">

      {/* --- Why Choose Us Section --- */}
      <div className="bg-[#064B5F]/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 border border-[#064B5F]/10 w-full">
        {/* Changed lg:grid-cols-5 to a more flexible mobile-first stack */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">

          {/* Text Side */}
          <div className="lg:col-span-2 w-full text-center lg:text-left">
            <h2 className="text-[#064B5F] font-bold text-2xl md:text-4xl mb-4 font-[family-name:var(--font-playfair)] leading-tight">
              Why Choose <br className="hidden lg:block" /> AB Capital
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
              Speed, clarity, and results for global entrepreneurs.
            </p>
            <Link
              href="/#form"
              className="inline-flex items-center gap-2 text-[#064B5F] text-sm font-bold border-b-2 border-[#064B5F] pb-0.5 hover:gap-4 transition-all"
            >
              Speak to an Expert <ArrowRight size={18} />
            </Link>
          </div>

          {/* Icons Side */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/60 p-3 md:p-3.5 rounded-xl border border-white transition-all hover:bg-white hover:shadow-md"
              >
                <div className="bg-[#064B5F] p-2 rounded-lg shrink-0">
                  <item.icon className="text-white" size={16} />
                </div>
                <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- Our Core Services Header --- */}
      <div className="w-full flex flex-col items-center gap-4 md:gap-6">
        <div className="text-center max-w-3xl">
          <h2 className="text-[#064B5F] uppercase font-bold tracking-[0.2em] mb-2 md:mb-4 text-xs md:text-sm">Our Core Services</h2>
          <h3 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 font-[family-name:var(--font-playfair)]">
            Business Setup in Dubai & UAE
          </h3>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed px-2">
            We help you choose the right business structure based on your goals, activity, and budget —
            ensuring a smooth and efficient setup experience.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mt-6 md:mt-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 p-6 md:p-10 bg-white hover:text-white overflow-hidden transition-all duration-500 shadow-lg shadow-gray-200/50 flex flex-col min-h-[400px] md:h-full"
            >
              {/* Background Image Effect - Added 'pointer-events-none' to prevent blocking clicks */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-[#064B5F]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-start text-left h-full pointer-events-none">
                <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-2xl bg-[#064B5F]/5 group-hover:bg-white/20 transition-colors">
                  <card.icon className="text-[#064B5F] group-hover:text-white w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 leading-tight">{card.title}</h3>

                <p className="text-gray-500 group-hover:text-white/80 text-sm md:text-base leading-relaxed mb-8 flex-grow font-light">
                  {card.text}
                </p>

                {/* Button - Enabled pointer-events so it remains clickable */}
                <Link
                  href="tel:+971585857119"
                  className="pointer-events-auto w-full flex items-center justify-center gap-3 bg-[#064B5F] group-hover:bg-white text-white group-hover:text-[#064B5F] font-bold py-3.5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg active:scale-95"
                >
                  <span className="text-sm md:text-base">Call to Know More</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}