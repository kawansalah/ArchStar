import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";

interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      submenu: [
        { label: "Logistics Consultancy", href: "/services#logistics-consultancy" },
        { label: "Finance Consultancy", href: "/services#finance-consultancy" },
        { label: "Management Consultancy", href: "/services#management-consultancy" },
        { label: "Global Logistics Operations", href: "/services#global-logistics-operations" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-0"
            : "bg-transparent py-0"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Arch Star USA Logo"
                  className="h-11 w-auto transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.submenu ? (
                    <>
                      <Link
                        to={item.href}
                        className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-200 flex items-center gap-1 rounded-lg ${scrolled
                            ? "text-slate-700 hover:text-secondary hover:bg-slate-50"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                          }`}
                      >
                        {item.label}
                        <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {/* Dropdown */}
                      <div className="absolute left-0 top-full mt-1 w-72 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 overflow-hidden border border-slate-100">
                        <div className="py-1.5">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={handleLinkClick}
                              className="flex items-center justify-between px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary transition-colors duration-150 group/item"
                            >
                              <span className="font-medium">{subItem.label}</span>
                              <svg className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-200 inline-flex items-center rounded-lg ${scrolled
                          ? isActive(item.href)
                            ? "text-secondary bg-secondary/8"
                            : "text-slate-700 hover:text-secondary hover:bg-slate-50"
                          : isActive(item.href)
                            ? "text-white bg-white/15"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-current rounded-full opacity-40" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-slate-900 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-yellow-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2.5 rounded-xl focus:outline-none transition-all duration-200 ${scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
                  }`}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                  <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-200 ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-400 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-charcoal">
            <img src={logo} alt="Arch Star USA" className="h-9 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Label */}
          <div className="px-5 pt-5 pb-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Navigation</p>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-thin">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="opacity-0 animate-slideIn"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                >
                  {item.submenu ? (
                    <div>
                      <div className="flex items-center gap-1">
                        <Link
                          to={item.href}
                          onClick={handleLinkClick}
                          className={`flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive(item.href)
                              ? "bg-secondary text-white"
                              : "text-slate-700 hover:bg-slate-50 hover:text-secondary"
                            }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`p-3 rounded-xl transition-all duration-200 ${isServicesOpen ? "bg-secondary/10 text-secondary" : "text-slate-400 hover:bg-slate-50"
                            }`}
                        >
                          <svg className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                        <div className="pl-4 pr-1 py-1 space-y-0.5">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={handleLinkClick}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-500 hover:text-secondary hover:bg-slate-50 rounded-lg transition-all duration-150 border-l-2 border-transparent hover:border-secondary"
                            >
                              <span className="w-1 h-1 rounded-full bg-slate-300" />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive(item.href)
                          ? "bg-secondary text-white"
                          : "text-slate-700 hover:bg-slate-50 hover:text-secondary"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Footer CTA */}
          <div className="p-4 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 bg-primary text-slate-900 px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all duration-200"
            >
              Get Started
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
