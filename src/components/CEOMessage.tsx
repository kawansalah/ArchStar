import { Link } from "react-router-dom";
import ceoImage from "../assets/images/ceo.png";

const CEOMessage = () => {
  return (
    <section
      id="ceo-message"
      className="py-12 sm:py-16 lg:py-32 bg-linear-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            CEO Message
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Welcome Header First on Mobile */}
          <div className="text-center mb-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Arch Star (USA).
            </h3>
          </div>

          {/* CEO Image - Compact for Mobile */}
          <div
            className="relative animate-fade-in flex justify-center mb-6"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group w-48">
              {/* Decorative Background */}
              <div className="absolute -inset-2 bg-linear-to-r from-primary/10 to-secondary/10 rounded-xl blur-lg opacity-50"></div>

              {/* Image Container */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100">
                <img
                  src={ceoImage}
                  alt="Tawfik Mazraeh, CEO of Arch Star (USA)"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Quote Icon */}
              <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2 shadow-lg">
                <svg
                  className="w-4 h-4 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Tawfik Mazraeh</h3>
            <p className="text-base text-gray-600 mt-1">CEO, Arch Star (USA)</p>
          </div>

          {/* Message Content */}
          <div
            className="space-y-4 text-gray-700 text-sm leading-relaxed mb-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p>
              Logistics today is more than moving cargo, it is about{" "}
              <span className="font-semibold text-gray-900">
                time, cost control, compliance, and trust
              </span>
              . At Arch Star, we operate as both a{" "}
              <span className="font-semibold text-gray-900">
                consultancy-led advisor
              </span>{" "}
              and a{" "}
              <span className="font-semibold text-gray-900">
                global logistics operator
              </span>
              , supporting clients from strategy to execution{" "}
              <span className="font-bold text-gray-900">A to Z</span>.
            </p>

            <p>
              We help countries, institutions, and companies improve logistics,
              finance, and management performance with{" "}
              <span className="font-semibold text-gray-900">
                practical solutions, strong documentation, and measurable
                results
              </span>
              . As a registered company in the United States with an
              international footprint, we are ready to support complex projects
              worldwide.
            </p>

            <p className="pt-2 text-center">
              Thank you for visiting. Let's discuss your goals{" "}
              <span className="font-bold text-gray-900 text-base">
                Plan Smart, Move Global
              </span>
              .
            </p>
          </div>

          {/* Signature - Centered on Mobile */}
          <div className="text-center py-6 border-t border-gray-200 mb-6">
            <p className="text-gray-600 text-sm">Sincerely,</p>
            <p className="text-lg font-bold text-gray-900 mt-2">
              Tawfik Mazraeh
            </p>
            <p className="text-sm text-gray-600">CEO, Arch Star (USA)</p>
          </div>

          {/* CTA Button - Full Width on Mobile */}
          <div className="mb-8">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-3 bg-secondary text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-secondary/90 transition-all duration-300 active:scale-95 group"
            >
              Let's Discuss Your Goals
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-16 items-start mb-5">
          {/* Left Column - CEO Image */}
          <div
            className="relative lg:col-span-2 animate-fade-in flex justify-end"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group max-w-sm w-full">
              {/* Decorative Background - Subtle */}
              <div className="absolute -inset-2 bg-linear-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>

              {/* Image Container */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 group-hover:shadow-xl transition-all duration-500">
                <img
                  src={ceoImage}
                  alt="Tawfik Mazraeh, CEO of Arch Star (USA)"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Quote Icon */}
              <div className="absolute -top-3 -right-3 bg-primary rounded-full p-3 shadow-lg">
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Message Content */}
          <div
            className="lg:col-span-3 space-y-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Welcome Header */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Arch Star (USA).
              </h3>
            </div>

            {/* Message Paragraphs */}
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Logistics today is more than moving cargo, it is about{" "}
                <span className="font-semibold text-gray-900">
                  time, cost control, compliance, and trust
                </span>
                . At Arch Star, we operate as both a{" "}
                <span className="font-semibold text-gray-900">
                  consultancy-led advisor
                </span>{" "}
                and a{" "}
                <span className="font-semibold text-gray-900">
                  global logistics operator
                </span>
                , supporting clients from strategy to execution{" "}
                <span className="font-bold text-gray-900">A to Z</span>.
              </p>

              <p>
                We help countries, institutions, and companies improve
                logistics, finance, and management performance with{" "}
                <span className="font-semibold text-gray-900">
                  practical solutions, strong documentation, and measurable
                  results
                </span>
                . As a registered company in the United States with an
                international footprint, we are ready to support complex
                projects worldwide.
              </p>

              <p className="pt-2">
                Thank you for visiting. Let's discuss your goals{" "}
                <span className="font-bold text-gray-900 text-xl">
                  Plan Smart, Move Global
                </span>
                .
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-gray-200">
              <div className="space-y-1">
                <p className="text-gray-600 text-lg">Sincerely,</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  Tawfik Mazraeh
                </p>
                <p className="text-lg text-gray-600">CEO, Arch Star (USA)</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
              >
                Let's Discuss Your Goals
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "A to Z", label: "Full Spectrum Support" },
            { value: "Global", label: "International Footprint" },
            { value: "US Based", label: "Registered Company" },
            { value: "Measurable", label: "Results Driven" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="text-center p-3 lg:p-6 bg-white rounded-lg lg:rounded-xl shadow-md lg:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <p className="text-xl lg:text-3xl font-bold text-gray-900 mb-1">
                {item.value}
              </p>
              <p className="text-xs lg:text-sm text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
