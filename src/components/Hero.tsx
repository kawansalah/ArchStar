import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Global logistics operations - Arch Star USA"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-secondary/70 via-secondary/50 to-secondary/30"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Company Name */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-primary animate-slide-in">
                  ARCH STAR
                </span>
                <span className="block text-white mt-2">(USA)</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <p
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Plan Smart, Move Global
              </p>

              {/* Main Description */}
              <p
                className="text-lg sm:text-xl text-gray-100 leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Arch Star (USA) provides{" "}
                <span className="font-semibold text-primary">
                  logistics, finance, and management consultancy
                </span>{" "}
                plus global logistics operations with port and airport handling.
              </p>

              <p
                className="text-base sm:text-lg text-gray-200 leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                We support governments, institutions, and companies worldwide
                from <span className="font-bold text-primary">A to Z</span>:
                strategy, design, implementation, and delivery.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                Get Started
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

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                Our Services
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>

            {/* Keywords Tags */}
            <div
              className="flex flex-wrap gap-2 pt-4 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              {[
                "Logistics Consultancy USA",
                "Supply Chain Consulting",
                "Finance Consultancy",
                "Management Consultancy",
                "Global Logistics",
                "Port & Airport Handling",
              ].map((keyword, index) => (
                <span
                  key={keyword}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm text-gray-200 hover:bg-primary/20 hover:border-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Stats/Features */}
          <div
            className="hidden lg:grid grid-cols-2 gap-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Feature Cards */}
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
                title: "Global Reach",
                description:
                  "Operations across USA, Türkiye, Iraq, UAE, China, India, Italy, Germany",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "A to Z Support",
                description:
                  "From strategy to execution, complete project lifecycle management",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Fast Implementation",
                description:
                  "Rapid deployment with measurable results and strong documentation",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Expert Team",
                description:
                  "Experienced consultants serving governments, institutions & companies",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#ceo-message"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
