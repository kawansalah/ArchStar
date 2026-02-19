import { Link } from "react-router-dom";

const serviceIcons = [
  // Logistics Consultancy
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>,
  // Finance Consultancy
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>,
  // Management Consultancy
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Global Logistics Ops
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const services = [
  {
    title: "Logistics Consultancy",
    teaser: "Design and optimise supply chains at national, sector, and company level.",
    link: "/services#logistics-consultancy",
  },
  {
    title: "Finance Consultancy",
    teaser: "Strengthen financial control with cost analysis, cash-flow planning, and feasibility studies.",
    link: "/services#finance-consultancy",
  },
  {
    title: "Management Consultancy",
    teaser: "Build high-performing organisations through governance, SOPs, and PMO setup.",
    link: "/services#management-consultancy",
  },
  {
    title: "Global Logistics Operations",
    teaser: "End-to-end port & airport handling, multimodal routing, and documentation control.",
    link: "/services#global-logistics-operations",
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="lg:flex lg:items-end lg:justify-between mb-12 animate-fade-in">
          <div>
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our Services
            </h2>
            <div className="accent-bar" />
          </div>
          <p className="text-slate-500 text-base max-w-sm mt-4 lg:mt-0 lg:text-right">
            Comprehensive solutions from strategy design through to final delivery.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group service-card flex items-start gap-5 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/8 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-250">
                {serviceIcons[index]}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 mb-1.5 text-base group-hover:text-secondary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.teaser}
                </p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 mt-1 text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in" style={{ animationDelay: "450ms" }}>
          <p className="text-slate-500 text-sm">
            Ready to transform your operations?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-slate-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-yellow-300 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
          >
            Get Started Today
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
