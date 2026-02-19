import { Link } from "react-router-dom";
import ceoImage from "../assets/images/IMG_8982.png";

const CEOMessage = () => {
  return (
    <section
      id="ceo-message"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in">
          <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            A Message from Our CEO
          </h2>
          <div className="accent-bar" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — CEO Image */}
          <div
            className="lg:col-span-2 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative max-w-xs mx-auto lg:max-w-none">
              <div className="bg-neutral-50 rounded-2xl overflow-hidden shadow-card">
                <img
                  src={ceoImage}
                  alt="Tawfik Mazraeh, CEO of Arch Star (USA)"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Name card overlay at bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                <p className="font-bold text-slate-900 text-base leading-tight">Tawfik Mazraeh</p>
                <p className="text-slate-500 text-sm mt-0.5">Chief Executive Officer, Arch Star (USA)</p>
              </div>
            </div>
          </div>

          {/* Right — Message */}
          <div
            className="lg:col-span-3 space-y-7 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Welcome to Arch Star (USA).
            </h3>

            {/* Pull-quote */}
            <blockquote className="pull-quote text-lg text-slate-600 leading-relaxed">
              Logistics today is more than moving cargo — it is about time,
              cost control, compliance, and trust.
            </blockquote>

            <p className="text-slate-600 leading-relaxed">
              At Arch Star, we act as both a consultancy-led advisor and a
              global logistics operator, supporting clients from initial
              strategy through to full execution — A to Z. We serve
              governments, institutions, and companies worldwide with
              practical solutions, strong documentation, and measurable
              results.
            </p>

            <p className="text-slate-600 leading-relaxed">
              As a registered company in the United States with an
              international footprint across 8+ countries, we are ready to
              support complex projects at any scale. Let's discuss your goals
              —{" "}
              <span className="font-semibold text-slate-800">
                Plan Smart, Move Global.
              </span>
            </p>

            {/* Signature */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-slate-400 text-sm mb-1">Sincerely,</p>
              <p className="text-xl font-bold text-slate-900">Tawfik Mazraeh</p>
              <p className="text-slate-500 text-sm">CEO, Arch Star (USA)</p>
            </div>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5"
              >
                Let's Discuss Your Goals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Stat Row */}
        <div className="section-divider mt-16 mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }} />
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          {[
            { value: "A to Z", label: "Full Spectrum Support" },
            { value: "8+", label: "Countries Served" },
            { value: "US", label: "Registered Company" },
            { value: "100%", label: "Results Driven" },
          ].map((item) => (
            <div key={item.label} className="py-4">
              <p className="text-2xl md:text-3xl font-bold text-secondary mb-1">{item.value}</p>
              <p className="text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
