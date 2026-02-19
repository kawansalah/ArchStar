import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactLocations = [
    { region: "USA", phone: "+1 916 904 9870", email: "usa@archstargroup.com" },
    { region: "Geneva", phone: "+41 79 511 65 51", email: "nabila@archstargroup.com" },
    { region: "Middle East", phone: "+964 750 448 3406", email: "hami@archstargroup.com" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Global Footprint", href: "/global-footprint" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Logistics Consultancy", href: "/services#logistics-consultancy" },
    { label: "Finance Consultancy", href: "/services#finance-consultancy" },
    { label: "Management Consultancy", href: "/services#management-consultancy" },
    { label: "Global Logistics Ops", href: "/services#global-logistics-operations" },
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Thin primary accent stripe at top */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="Arch Star USA Logo" className="h-12 md:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Arch Star (USA) provides consultancy-led advisory and end-to-end global logistics operations — A to Z.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/8 hover:bg-primary hover:text-slate-900 text-white/60 rounded-lg flex items-center justify-center transition-all duration-200" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/8 hover:bg-primary hover:text-slate-900 text-white/60 rounded-lg flex items-center justify-center transition-all duration-200" aria-label="X / Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/55 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-white/55 hover:text-white text-sm transition-colors duration-200 leading-tight block">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Contact Us</h3>
            <div className="space-y-4">
              {contactLocations.map((loc) => (
                <div key={loc.region} className="p-4 bg-white/5 rounded-xl border border-white/8 hover:bg-white/8 transition-all duration-200">
                  <p className="text-white text-sm font-semibold mb-2">{loc.region}</p>
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/50 hover:text-white text-xs transition-colors duration-200 mb-1">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {loc.phone}
                  </a>
                  <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-white/50 hover:text-white text-xs transition-colors duration-200 break-all">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {loc.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-xs text-center md:text-left">
              © {currentYear} Arch Star (USA). All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-white/35">
              <Link to="/privacy" className="hover:text-white/70 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white/70 transition-colors duration-200">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white/70 transition-colors duration-200">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
