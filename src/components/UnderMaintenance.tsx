import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import maintenanceImage from "../assets/images/about-hero.jpg";

interface UnderMaintenanceProps {
  pageName: string;
  expectedDate?: string;
}

const UnderMaintenance = ({
  pageName,
  expectedDate,
}: UnderMaintenanceProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={maintenanceImage}
          alt="Under Maintenance"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-secondary/90 via-secondary/80 to-secondary/70"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src={logo}
            alt="Arch Star USA Logo"
            className="h-20 md:h-28 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Under Construction Icon */}
        <div
          className="flex justify-center mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {pageName}
        </h1>

        <div
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
            Under Construction
          </p>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            We're working hard to bring you this page. Our team is crafting
            something special that will enhance your experience with Arch Star
            USA.
          </p>
          {expectedDate && (
            <p className="text-base md:text-lg text-gray-300 mt-4">
              Expected launch:{" "}
              <span className="text-white font-semibold">{expectedDate}</span>
            </p>
          )}
        </div>

        {/* Progress Indicator */}
        <div
          className="max-w-md mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-linear-to-r from-primary to-primary/60 rounded-full animate-pulse w-3/4"></div>
          </div>
          <p className="text-sm text-gray-300 mt-2">75% Complete</p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
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
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Additional Info */}
        <div
          className="mt-12 pt-8 border-t border-white/20 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-gray-300 mb-4">
            In the meantime, explore our other services:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all duration-300 backdrop-blur-sm"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all duration-300 backdrop-blur-sm"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;
