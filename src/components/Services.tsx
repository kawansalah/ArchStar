import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
  keywords: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Logistics Consultancy",
      description:
        "We design and improve supply chains and logistics systems from national logistics strategies and corridor development to company-level optimization. We help clients improve cost, speed, reliability, compliance, and visibility through operating models, KPIs, and implementation roadmaps.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
      link: "/services#logistics-consultancy",
      keywords: [
        "Supply Chain Consultancy",
        "National Logistics Strategy",
        "Corridor Development",
        "Logistics KPI Framework",
        "Logistics Optimization",
      ],
    },
    {
      title: "Finance Consultancy",
      description:
        "We strengthen financial control and decision-making by identifying cost drivers, improving cash-flow planning, and building pricing and profitability models. We also prepare feasibility studies and investment cases for logistics hubs, free zones, warehouses, and fleets.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
      link: "/services#finance-consultancy",
      keywords: [
        "Logistics Finance Consulting",
        "Cost Analysis",
        "Cash Flow Planning",
        "Feasibility Study",
        "Investment Case",
      ],
    },
    {
      title: "Management Consultancy",
      description:
        "We build high-performing organizations by improving structure, roles, governance, and performance management. With SOPs, PMO setup, and change management, we help leaders turn strategy into daily execution.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
      link: "/services#management-consultancy",
      keywords: [
        "Operating Model Design",
        "SOP Development",
        "PMO Setup",
        "Performance Management KPIs",
        "Change Management",
      ],
    },
    {
      title: "Global Logistics Operations",
      description:
        "Beyond consulting, we provide end-to-end logistics coordination including port and airport handling, documentation control, milestone tracking, and multimodal routing so plans become real movement and real outcomes.",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&q=80",
      link: "/services#global-logistics-operations",
      keywords: [
        "Global Logistics Operations",
        "Port Handling Services",
        "Airport Cargo Handling",
        "Multimodal Logistics",
        "Cross-Border Logistics Coordination",
      ],
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="text-secondary">Do</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions that transform your logistics, finance, and
            management capabilities into competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-block px-3 py-1 text-xs font-medium text-secondary bg-primary/20 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300 group/link"
                >
                  <span>Learn More</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your operations?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Get Started Today
            <svg
              className="h-5 w-5"
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
    </section>
  );
};

export default Services;
