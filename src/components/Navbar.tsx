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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      submenu: [
        {
          label: "Logistics Consultancy",
          href: "/services#logistics-consultancy",
        },
        { label: "Finance Consultancy", href: "/services#finance-consultancy" },
        {
          label: "Management Consultancy",
          href: "/services#management-consultancy",
        },
        {
          label: "Global Logistics Operations",
          href: "/services#global-logistics-operations",
        },
      ],
    },
    { label: "Industries", href: "/industries" },
    { label: "Global Footprint", href: "/global-footprint" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Icon mapping for menu items
  const getMenuIcon = (label: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      Home: (
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      About: (
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      Services: (
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      Industries: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      "Global Footprint": (
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      Contact: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    };
    return (
      icons[label] || (
        <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
      )
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-secondary shadow-2xl py-2"
            : "bg-transparent backdrop-blur-sm py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                to="/"
                className={`flex items-center group p-2.5 rounded-xl px-6 transition-all duration-300 ${
                  scrolled
                    ? "bg-white/10 hover:bg-white/15"
                    : "bg-white/10 backdrop-blur-md hover:bg-white/15"
                }`}
              >
                <img
                  src={logo}
                  alt="Arch Star USA Logo"
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className="relative px-5 py-2.5 font-semibold transition-all duration-300 flex items-center gap-1.5 group text-white hover:text-white/90">
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white rounded-full"></span>
                        </span>
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
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
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-3 transition-all duration-300 overflow-hidden border border-gray-100/50">
                        <div className="p-2">
                          {item.submenu.map((subItem, index) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={handleLinkClick}
                              className="group/item flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:bg-linear-to-r hover:from-secondary/10 hover:to-secondary/5 hover:text-secondary transition-all duration-200 rounded-xl border-l-3 border-transparent hover:border-secondary"
                              style={{
                                animationDelay: `${index * 40}ms`,
                              }}
                            >
                              <span className="font-medium">
                                {subItem.label}
                              </span>
                              <svg
                                className="h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-secondary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
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
                      className={`relative px-5 py-2.5 font-semibold transition-all duration-300 inline-block group ${
                        isActive(item.href)
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      <span className="relative">
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-white rounded-full ${
                            isActive(item.href)
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden group ${
                  scrolled
                    ? "bg-white text-secondary"
                    : "bg-white text-secondary"
                }`}
              >
                <span className="absolute inset-0 bg-linear-to-r from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Get Started</span>
                <svg
                  className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2.5 rounded-xl focus:outline-none transition-all duration-300 text-white hover:bg-white/10 active:scale-95 group"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-center gap-1.5">
                  <span
                    className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-0 scale-0"
                        : "opacity-100 scale-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
                {/* Animated background pulse */}
                <span
                  className={`absolute inset-0 rounded-xl bg-white/20 transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-60 lg:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-white shadow-2xl z-70 lg:hidden transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col bg-linear-to-br from-white via-gray-50/30 to-white">
          {/* Sidebar Header */}
          <div className="relative flex items-center justify-between p-5 border-b border-gray-200/80 bg-linear-to-r from-secondary to-secondary/95">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={logo}
                  alt="Arch Star USA"
                  className="h-11 w-auto drop-shadow-lg"
                />
                <div className="absolute -inset-1 bg-white/20 rounded-full blur-md -z-10"></div>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-white/20 active:bg-white/30 transition-all duration-200 text-white group"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-200 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Label */}
          <div className="px-6 pt-6 pb-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Navigation
            </p>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="space-y-1.5">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="opacity-0 animate-slideIn"
                  style={{
                    animationDelay: `${index * 60}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {item.submenu ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full text-left px-4 py-3.5 text-sm font-semibold rounded-xl flex justify-between items-center transition-all duration-300 group ${
                          isServicesOpen
                            ? "bg-secondary/10 text-secondary shadow-sm"
                            : "text-gray-700 hover:bg-gray-100/80"
                        }`}
                      >
                        <span className="flex items-center gap-3.5">
                          <span
                            className={`transition-colors duration-300 ${
                              isServicesOpen
                                ? "text-secondary"
                                : "text-gray-500 group-hover:text-secondary"
                            }`}
                          >
                            {getMenuIcon(item.label)}
                          </span>
                          <span>{item.label}</span>
                        </span>
                        <svg
                          className={`h-5 w-5 transform transition-all duration-300 ${
                            isServicesOpen
                              ? "rotate-180 text-secondary"
                              : "text-gray-400 group-hover:text-secondary"
                          }`}
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
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isServicesOpen
                            ? "max-h-125 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-3 pr-1 py-1 space-y-0.5">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all duration-200 group/sub border-l-2 border-transparent hover:border-secondary/50"
                              onClick={handleLinkClick}
                              style={{
                                animationDelay: `${subIndex * 40}ms`,
                              }}
                            >
                              <svg
                                className="h-1.5 w-1.5 rounded-full fill-current text-gray-400 group-hover/sub:text-secondary transition-colors"
                                viewBox="0 0 6 6"
                              >
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                              <span className="flex-1">{subItem.label}</span>
                              <svg
                                className="h-4 w-4 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200 text-secondary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center gap-3.5 px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden ${
                        isActive(item.href)
                          ? "text-white bg-linear-to-r from-secondary via-secondary to-secondary/90 shadow-lg shadow-secondary/25"
                          : "text-gray-700 hover:bg-gray-100/80 hover:text-secondary"
                      }`}
                      onClick={handleLinkClick}
                    >
                      <span
                        className={`relative z-10 transition-transform duration-300 ${
                          isActive(item.href)
                            ? "text-white"
                            : "text-gray-500 group-hover:text-secondary group-hover:scale-110"
                        }`}
                      >
                        {getMenuIcon(item.label)}
                      </span>
                      <span className="relative z-10">{item.label}</span>

                      {/* Active indicator */}
                      {isActive(item.href) && (
                        <>
                          <span className="ml-auto relative z-10">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-transparent"></span>
                        </>
                      )}

                      {/* Hover effect */}
                      {!isActive(item.href) && (
                        <span className="absolute inset-0 bg-linear-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="px-4">
            <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-5 bg-linear-to-t from-gray-50/50 to-transparent">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2.5 bg-linear-to-r from-secondary via-secondary to-secondary/90 text-white px-6 py-4 rounded-xl font-bold text-sm hover:shadow-xl hover:shadow-secondary/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Get Started</span>
              <svg
                className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
