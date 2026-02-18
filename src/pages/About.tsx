import { Link } from "react-router-dom";
import aboutHeroImage from "../assets/images/about-hero.jpg";
import logo from "../assets/logo/logo.png";

const About = () => {
  return (
    <div className="bg-white">
      {/* About Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroImage}
            alt="About Arch Star USA - Global Logistics Consultancy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-secondary/80 via-secondary/60 to-secondary/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img
              src={logo}
              alt="Arch Star USA Logo"
              className="h-20 md:h-28 w-auto drop-shadow-2xl"
            />
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            About Arch Star (USA)
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white font-semibold mb-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Your Trusted Partner in Global Logistics Excellence
          </p>

          <p
            className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Registered in the USA with international presence, delivering
            comprehensive logistics, finance, and management solutions worldwide
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a
            href="#who-we-are"
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium">Learn More</span>
            <svg
              className="w-6 h-6"
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

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">
                  Arch Star (USA)
                </span>{" "}
                is a{" "}
                <span className="font-semibold text-gray-900">
                  registered consultancy and logistics company
                </span>{" "}
                based in the United States, specializing in logistics, finance,
                and management consultancy, plus global logistics operations
                with port and airport handling capabilities.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We serve{" "}
                <span className="font-semibold text-gray-900">
                  governments, institutions, and companies
                </span>{" "}
                worldwide, providing{" "}
                <span className="font-bold text-gray-900">A to Z</span> support
                from strategy design to full implementation and delivery.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our expertise combines{" "}
                <span className="font-semibold text-gray-900">
                  consultancy-led advisory services
                </span>{" "}
                with{" "}
                <span className="font-semibold text-gray-900">
                  hands-on operational execution
                </span>
                , ensuring measurable results backed by strong documentation.
              </p>
            </div>

            {/* Right Column - Key Facts */}
            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "US Registered Company",
                  description:
                    "Officially registered and operating in the United States",
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                  title: "International Presence",
                  description:
                    "Operations in USA, Türkiye, Iraq, UAE, China, India, Italy, Germany",
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  ),
                  title: "Multi-Sector Expertise",
                  description:
                    "Logistics, finance, and management consultancy services",
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
                  title: "A to Z Support",
                  description:
                    "Complete project lifecycle from strategy to delivery",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="shrink-0 text-gray-800">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-primary animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Vision
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To be the{" "}
                <span className="font-semibold text-gray-900">
                  global leader in integrated logistics consultancy and
                  operations
                </span>
                , recognized for delivering{" "}
                <span className="font-bold text-gray-900">
                  exceptional value
                </span>
                ,{" "}
                <span className="font-semibold text-gray-900">
                  innovative solutions
                </span>
                , and{" "}
                <span className="font-semibold text-gray-900">
                  measurable results
                </span>{" "}
                that empower our clients to succeed in the global marketplace.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a world where logistics, finance, and management
                work seamlessly together to drive sustainable growth and
                operational excellence.
              </p>
            </div>

            {/* Mission */}
            <div
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-secondary animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Mission
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To provide{" "}
                <span className="font-bold text-gray-900">A to Z</span>{" "}
                <span className="font-semibold text-gray-900">
                  comprehensive logistics, finance, and management solutions
                </span>{" "}
                to governments, institutions, and companies worldwide, combining{" "}
                <span className="font-semibold text-gray-900">
                  expert consultancy
                </span>{" "}
                with{" "}
                <span className="font-semibold text-gray-900">
                  operational excellence
                </span>
                .
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to delivering{" "}
                <span className="font-semibold text-gray-900">
                  practical solutions, strong documentation, and measurable
                  results
                </span>{" "}
                with integrity, professionalism, and innovation at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Arch Star Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Arch Star
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive logistics solutions with
              proven expertise and global reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                title: "US Registered & Compliant",
                description:
                  "Officially registered in the United States with full regulatory compliance and international standards adherence",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                title: "Global Footprint",
                description:
                  "Operational presence in 8+ countries including USA, Türkiye, Iraq, UAE, China, India, Italy, and Germany",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                title: "Multi-Discipline Expertise",
                description:
                  "Comprehensive services in logistics, finance, and management consultancy with port & airport handling",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                title: "A to Z Support",
                description:
                  "Complete project lifecycle management from initial strategy design through implementation to final delivery",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "Measurable Results",
                description:
                  "Data-driven approach with strong documentation, KPI tracking, and transparent reporting on all projects",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                  "Experienced professionals serving governments, institutions, and companies with proven track records",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-gray-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-gray-900 group-hover:text-gray-700 transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className="mt-16 text-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-linear-to-r from-secondary to-secondary/90 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Logistics?
              </h3>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how Arch Star can help you achieve your goals with
                our comprehensive A to Z solutions
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Contact Us Today
                <svg
                  className="w-5 h-5"
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
      </section>
    </div>
  );
};

export default About;
