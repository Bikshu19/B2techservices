import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
// Flash component
import Flash from "../components/Homepage/flash";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Top Navbar */}
      <div className="backdrop-blur-md flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 relative z-50 bg-black/10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="cursor-pointer">
            <img
              src="./WhatsApp_Image_2025-09-28_at_22.17.54_b334b773-removebg-preview.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[#1E93AB]">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center space-x-1 font-medium transition-colors duration-200 text-[#1E93AB] cursor-pointer hover:text-red-500"
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Dropdown menu */}
            <div
              className={`absolute top-full left-0 mt-3 w-56 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 overflow-hidden transition-all duration-300 origin-top z-50 ${
                openDropdown === "services"
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2">
                {[
                  "recruitmentservice",
                  "resumeservices",
                  "softwaretraining",
                  "UI/UX Design Thinking",
                  "what sets Us Apart",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className="block px-4 py-3 font-medium text-[#1E93AB] hover:text-red-500 hover:bg-white/20 transition cursor-pointer"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center space-x-1 font-medium transition-colors duration-200 text-[#1E93AB] cursor-pointer hover:text-red-500"
            >
              <span>About</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  openDropdown === "company" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-3 w-48 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 overflow-hidden transition-all duration-300 origin-top z-50 ${
                openDropdown === "company"
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2">
                {[
                  "companyphilosopy",
                  "corevalues",
                  "founder's Vision",
                  "Growth Journey",
                 
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className="block px-4 py-3 font-medium text-[#1E93AB] hover:text-red-500 hover:bg-white/20 transition cursor-pointer"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Static Links */}
          {["contact", "Expertise"].map((item) => (
            <Link
              to={`/${item}`}
              key={item}
              className="text-[#1E93AB] font-semibold hover:text-red-500 transition-colors cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-[#1E93AB] hover:text-red-500 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/50 backdrop-blur-md border-t border-white/30 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3 text-[#1E93AB]">
          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-lg transition-colors cursor-pointer text-[#1E93AB] hover:text-red-500 ${
                openDropdown === "services" ? "bg-white/20" : "bg-black/20"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === "services" ? "max-h-[300px] mt-2" : "max-h-0"
              }`}
            >
              <ul className="bg-white/20 backdrop-blur-md rounded-lg border border-white/30">
                {[
                  "recruitmentservice",
                  "resumeservices",
                  "softwaretraining",
                  "UI/UX Design Thinking",
                  "what sets Us Apart",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className="block px-4 py-3 font-medium text-[#1E93AB] hover:text-red-500 hover:bg-white/20 transition cursor-pointer"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Company Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("company")}
              className={`flex items-center justify-between w-full px-4 py-3 font-semibold rounded-lg transition-colors cursor-pointer text-[#1E93AB] hover:text-red-500 ${
                openDropdown === "company" ? "bg-white/20" : "bg-black/20"
              }`}
            >
              <span>Company</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  openDropdown === "company" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === "company" ? "max-h-[200px] mt-2" : "max-h-0"
              }`}
            >
              <ul className="bg-white/20 backdrop-blur-md rounded-lg border border-white/30">
                {["companyphilosopy", "corevalues", "founder's Vision", "Growth Journey"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to={`/${item}`}
                        className="block px-4 py-3 font-medium text-[#1E93AB] hover:text-red-500 hover:bg-white/20 transition cursor-pointer"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Mobile Static Links */}
          {["contact", "Expertise"].map((item) => (
            <Link
              to={`/${item}`}
              key={item}
              className="block px-4 py-3 text-[#1E93AB] font-semibold hover:text-red-500 transition-colors cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Flash news below Navbar */}
      <div className="relative z-40">
        <Flash />
      </div>
    </nav>
  );
};

export default Navbar;
