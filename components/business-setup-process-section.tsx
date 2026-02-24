import Image from 'next/image';
import { Lightbulb, ActivitySquare, FileStack, Map } from 'lucide-react';

export default function BusinessSetupProcessSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

        {/* Left Image with Decorative Elements */}
        <div className="relative flex items-center justify-center order-2 lg:order-1">
          {/* Decorative Background Shape */}
          <div className="absolute -top-4 sm:-top-6 lg:-top-8 -left-4 sm:-left-6 lg:-left-8 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-[#036B6D]/10 rounded-full blur-3xl -z-10"></div>

          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[250px] sm:h-[300px] lg:h-[400px]">
            <Image
              src="/assets/images/img-5.jpg"
              alt="Business Setup Process"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-[#036B6D] uppercase tracking-wide font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-center lg:text-left">
            Step-by-Step Business Setup Process
          </h2>
          <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg text-center lg:text-left">
            From idea to execution, we guide you through every stage of setting up your business in the UAE — ensuring compliance, efficiency, and complete ownership.
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {[
              { icon: Lightbulb, text: 'Strategic Guidance' },
              { icon: ActivitySquare, text: 'Bank Account Opening' },
              { icon: FileStack, text: 'Legal Compliance' },
              { icon: Map, text: 'Location Selection' },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl shadow-md p-3 sm:p-4 lg:p-5 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="p-2 sm:p-3 rounded-full bg-[#036B6D]/10 flex-shrink-0">
                  <Icon className="text-[#036B6D] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
