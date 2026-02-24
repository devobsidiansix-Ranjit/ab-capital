export default function CallToActionSection() {
  return (
    <section className="relative bg-[#1F6A81] py-14 mt-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover bg-center" />

      <div className="relative w-[90%] sm:w-[80%] mx-auto text-center flex flex-col items-center gap-6">
        <p className="text-white text-lg sm:text-2xl font-semibold max-w-3xl leading-relaxed">
          Ready to take the next step in establishing your business in the UAE?{" "}
          <span className="text-yellow-300">
            Contact us today
          </span>{" "}
          to discuss your company formation needs, and let us assist you in making your entrepreneurial dreams a reality.
        </p>
      </div>
    </section>
  );
}
