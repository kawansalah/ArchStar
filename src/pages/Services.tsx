import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  const location = useLocation();

  // Handle hash navigation for service section links
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the # symbol
      const id = hash.substring(1);
      // Wait for render to complete
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const services = [
    {
      id: "logistics-consultancy",
      number: "01",
      title: "Logistics Consultancy",
      description:
        "We design and improve supply chains and logistics systems at national, sector, and company levels. From national logistics strategies and corridor development to company-level optimization, we help clients improve cost, speed, reliability, compliance, and visibility.",
      details:
        "Our work includes operating model design, KPI frameworks, and clear implementation roadmaps that turn strategy into measurable performance improvements.",
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
            strokeWidth={1.5}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      id: "finance-consultancy",
      number: "02",
      title: "Finance Consultancy",
      description:
        "We strengthen financial control and decision-making by identifying cost drivers, improving cash-flow planning, and building pricing and profitability models.",
      details:
        "We also prepare feasibility studies and investment cases for logistics hubs, free zones, warehouses, and fleet development — supporting informed investment decisions with strong financial analysis and structured documentation.",
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
            strokeWidth={1.5}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "management-consultancy",
      number: "03",
      title: "Management Consultancy",
      description:
        "We build high-performing organizations by improving structure, roles, governance, and performance management systems.",
      details:
        "Through SOP development, PMO setup, and change management programs, we help leadership teams translate strategy into daily execution with clear accountability and measurable KPIs.",
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
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "global-logistics-operations",
      number: "04",
      title: "Global Logistics Operations",
      description:
        "Beyond advisory, Arch Star delivers end-to-end logistics coordination. We provide port and airport handling, documentation control, milestone tracking, and multimodal routing.",
      details:
        "Our operational services ensure cross-border logistics coordination so plans become real movement — delivered on time, compliant, and cost-controlled.",
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
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const supportLevels = [
    {
      title: "Country / National Level",
      items: [
        "Logistics strategy",
        "Corridor performance",
        "Border efficiency",
        "KPI frameworks",
      ],
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
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
      ),
    },
    {
      title: "Sector Level",
      items: [
        "Industry diagnostics",
        "Cost-to-serve reduction",
        "Capacity planning",
      ],
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
    },
    {
      title: "Company / Project Level",
      items: [
        "Route optimization",
        "Warehouse design",
        "3PL/4PL selection",
        "SOP development",
        "Dashboards",
      ],
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Services Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80"
            alt="Arch Star Services - Global Logistics Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-secondary/80 via-secondary/60 to-secondary/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Our Services
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white font-semibold mb-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Consultancy-Led Advisory & End-to-End Global Logistics Operations
          </p>

          <p
            className="text-lg md:text-xl text-gray-100 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            We support governments, institutions, and companies from strategy to
            execution — A to Z
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a
            href="#services-overview"
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium">Explore Services</span>
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

      {/* Services Details Section */}
      <section
        id="services-overview"
        className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`mb-20 last:mb-0 scroll-mt-24 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Service Icon & Number */}
                <div
                  className={`animate-fade-in ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="shrink-0 w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-gray-800">
                      {service.icon}
                    </div>
                    <span className="text-6xl font-bold text-gray-800">
                      {service.number}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <div className="w-20 h-1 bg-primary mb-6"></div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Service Image */}
                <div
                  className={`animate-fade-in ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? "1586528116311-ad8dd3c8310d"
                          : index === 1
                            ? "1554224155-6726b3ff858f"
                            : index === 2
                              ? "1552664730-d307ca884978"
                              : "1578575437130-527eed3abbec"
                      }?w=800&h=600&fit=crop&q=80`}
                      alt={service.title}
                      className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A to Z Support Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              A to Z Support
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-100">
              We support clients at every level
            </p>
          </div>

          {/* Support Levels Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div
                key={level.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-800 mb-6">
                  {level.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6">
                  {level.title}
                </h3>

                {/* Items List */}
                <ul className="space-y-3">
                  {level.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-100"
                    >
                      <svg
                        className="w-5 h-5 text-white shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
            Ready to Transform Your Operations?
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Let's discuss how our comprehensive services can help you achieve
            your logistics and business goals.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Contact Us
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
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-white text-secondary border-2 border-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
