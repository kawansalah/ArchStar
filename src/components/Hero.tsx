import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/contact?tracking=${encodeURIComponent(trackingId)}`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background Image — minimal overlay to let photo breathe */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Global logistics operations — Arch Star USA"
          className="w-full h-full object-cover"
        />
        {/* Clean dark overlay — no branded blue flood */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/55 to-slate-900/30" />
        {/* Subtle bottom fade for content readability */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="max-w-2xl space-y-8">
          {/* Eyebrow label */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-semibold rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              US Registered · Global Operations
            </span>
          </div>

          {/* H1 */}
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Plan Smart,
              <br />
              <span className="text-primary">Move Global.</span>
            </h1>
          </div>

          {/* Tagline — single sentence, no bold spam */}
          <p
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            Logistics, Finance & Management Consultancy + Technology & AI Partnership Solutions + Global Logistics Operations.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Link to="/contact" className="btn-primary text-sm">
              Request a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/contact" className="btn-ghost text-sm">
              Contact Our Team
            </Link>
          </div>


        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#ceo-message"
          className="flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
