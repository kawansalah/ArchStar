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
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
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
              className={`flex items-center group p-2 rounded-lg px-6 transition-all duration-500 ${
                scrolled ? "bg-white/10" : "bg-white/10 backdrop-blur-md"
              }`}
            >
              <img
                src={logo}
                alt="Arch Star USA Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="relative px-5 py-2 font-medium transition-all duration-500 flex items-center gap-1 group text-white hover:text-white/80">
                      <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white"></span>
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
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="py-2">
                        {item.submenu.map((subItem, index) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={handleLinkClick}
                            className="group/item block px-6 py-3 text-sm text-gray-700 hover:bg-linear-to-r hover:from-primary/20 hover:to-primary/5 hover:text-secondary transition-all duration-200 border-l-4 border-transparent hover:border-secondary"
                            style={{
                              animationDelay: `${index * 50}ms`,
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">
                                {subItem.label}
                              </span>
                              <svg
                                className="h-4 w-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
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
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`relative px-5 py-2 font-medium transition-all duration-500 inline-block group ${
                      isActive(item.href)
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 bg-white ${
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
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-500 hover:shadow-lg hover:scale-105 active:scale-95 ${
                scrolled
                  ? "bg-white text-secondary hover:bg-white/90"
                  : "bg-white text-secondary hover:bg-white/90"
              }`}
            >
              Get Started
              <svg
                className="h-4 w-4"
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-500 text-white hover:text-white/80 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-150 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-linear-to-b from-white to-gray-50 border-t border-gray-200">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.submenu ? (
                <>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-secondary hover:bg-white rounded-lg flex justify-between items-center transition-all duration-200 shadow-sm"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transform transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
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
                      isServicesOpen ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-secondary hover:bg-primary/30 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-secondary"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 shadow-sm ${
                    isActive(item.href)
                      ? "text-secondary bg-primary/30 border-l-4 border-secondary"
                      : "text-gray-700 hover:text-secondary hover:bg-white"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          {/* Mobile CTA */}
          <div className="pt-4">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-all duration-300 shadow-lg"
            >
              Get Started
              <svg
                className="h-4 w-4"
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
    </nav>
  );
};

export default Navbar;
