"use client";

import { FileCog, Building2, Factory, Calculator, Receipt, Users2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BusinessLicensesSection() {
  const supportServices = [
    {
      icon: Calculator,
      title: "Financial Management",
      desc: "Accurate financial records to track your growth and maintain professional standards."
    },
    {
      icon: Receipt,
      title: "Regulatory Filings",
      desc: "Expert guidance on local registration requirements and corporate reporting standards."
    },
    {
      icon: Users2,
      title: "Payroll & Operations",
      desc: "Seamless payroll management and administrative operational support."
    }
  ];

  return (
    <section className="my-24 font-[family-name:var(--font-poppins)]">
      <div className="w-[90%] lg:w-[85%] max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* --- Business Support Section --- */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-[#1E6981] uppercase font-bold sm:text-3xl text-xl tracking-widest">
              Business Operations Support
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto italic">
              AB Capital ensures your venture is positioned within the right professional framework to operate effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Professional Services Support */}
            <div className="flex flex-col gap-4 items-center p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group">
              <FileCog className="text-[#1E6981] w-12 h-12 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-gray-900">Service Sector Support</h3>
              <p className="text-sm text-center text-gray-500 leading-relaxed">
                For service providers and consultants. We assist specialists in establishing their presence while maintaining full operational control.
              </p>
            </div>

            {/* Commercial Support - Highlighted */}
            <div className="flex flex-col gap-5 items-center p-10 rounded-[2rem] shadow-2xl bg-[#1E6981] text-white transform md:scale-105 z-10">
              <Building2 className="w-16 h-16 text-teal-200" />
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Commercial Operations</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Our team assists trading businesses with their structural setup, ensuring your import/export and general trading workflow is seamless.
                </p>
              </div>
            </div>

            {/* Industrial Support */}
            <div className="flex flex-col gap-4 items-center p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group">
              <Factory className="text-[#1E6981] w-12 h-12 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-gray-900">Industrial Logistics</h3>
              <p className="text-sm text-center text-gray-500 leading-relaxed">
                For manufacturing and production activities. We advise on operational safety, environmental standards, and necessary facility approvals.
              </p>
            </div>
          </div>
        </div>

        {/* --- Ongoing Support Section --- */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h3 className="text-[#1E6981] font-bold text-2xl md:text-3xl mb-4 leading-tight">
                Management & <br /> Ongoing Support
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Establishment is just the beginning. Our professional support services keep your operations smooth and organized so you can scale with confidence.
              </p>
              <Link href="#form" className="inline-flex items-center gap-2 text-[#1E6981] font-bold text-sm hover:gap-4 transition-all">
                Learn About Support <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
              {supportServices.map((service, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#1E6981]/30 transition-colors">
                  <service.icon className="text-[#1E6981] mb-4" size={28} />
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{service.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}