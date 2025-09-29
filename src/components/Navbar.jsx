import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {Link} from 'react-router-dom'

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
    <nav className="backdrop-blur-sm bg-white/30 border-b border-white/20 w-full relative">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to='/'><img
            src="./WhatsApp_Image_2025-09-28_at_22.17.54_b334b773-removebg-preview.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          /></Link>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                openDropdown === "services"
                  ? "text-purple-600"
                  : "text-gray-800 hover:text-purple-600"
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
              className={`absolute top-full left-0 mt-3 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 origin-top z-50 ${
                openDropdown === "services"
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2">
              
                 <Link to='/recruitmentservice'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 Recruitmentservice
                </li></Link>
                 <Link to='/resumeservices'>
                 <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                Resumeservices
                </li>
          
          </Link>
          <Link to='/softwaretraining' >
          <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 SoftwareTraining
                </li>
        
          </Link>
          <Link to='/ui'>
          <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 UI
                </li>
          </Link>
          <Link to='/whatssets'>
          <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 What Set's up
                </li>
          
          </Link>
                
              </ul>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                openDropdown === "company"
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
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
              className={`absolute top-full left-0 mt-3 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 origin-top z-50 ${
                openDropdown === "company"
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2">
                <Link to='/companyphilosopy'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Companyphilosopy
                  &foundation
                </li></Link>
                <Link to='/corevalues'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Corevalues & Beliefs
                </li></Link>
                <Link to='/founder'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Founder's Vision & Story
                </li></Link>
                <Link to='/Growth'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Growth Journey & Evolution
                </li></Link>
                
              </ul>
            </div>
          </div>

          {/* Static Links */}
        <Link to='/contact' className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-200">
          Contact
          </Link>
          <Link to='/Expertise' className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-200">
         Expertise
          </Link>
        
          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {/* Mobile Services Dropdown */}
          <div>
            <button
  onClick={() => toggleDropdown("services")}
  className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-lg shadow-md transition-colors ${
    openDropdown === "services"
      ? "bg-[#446063] text-white"
      : "bg-[#446063] text-white hover:bg-[#365054]"
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
                openDropdown === "services" ? "max-h-100 mt-2" : "max-h-0"
              }`}
            >
              <ul className="bg-white rounded-lg shadow-md border border-gray-200">
                                 <Link to='/recruitmentservice'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 Recruitmentservice
                </li></Link>
                 <Link to='/resumeservices'>
                 <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                Resumeservices
                </li>
          
          </Link>
          <Link to='/softwaretraining' >
          <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 SoftwareTraining
                </li>
        
          </Link>
          <Link to='/ui'>
          <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 UI
                </li>
          </Link>
            <Link to='/whatssets'>
          <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                 What Set's up
                </li>
          </Link>
          
              </ul>
            </div>
          </div>

          {/* Mobile Company Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("company")}
              className={`flex items-center justify-between w-full px-4 py-3 font-semibold rounded-lg transition-colors ${
                openDropdown === "company"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
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
                openDropdown === "company" ? "max-h-100 mt-2" : "max-h-0"
              }`}
            >
              <ul className="bg-white rounded-lg shadow-md border border-gray-200">
              <Link to='/companyphilosopy'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Companyphilosopy
                  &foundation
                </li></Link>
                <Link to='/corevalues'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Corevalues & Beliefs
                </li></Link>
                <Link to='/founder'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Founder's Vision & Story
                </li></Link>
                <Link to='/Growth'><li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 border-transparent hover:border-blue-500 font-medium text-gray-700">
                  Growth Journey & Evolution
                </li></Link>
              
              </ul>
            </div>
          </div>

          {/* Mobile Static Links */}
          
         
          <Link
           to='/contact'
            className="block px-4 py-3 text-gray-800 font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Contact
          </Link>
          <Link
            to='/Expertise'
            className="block px-4 py-3 text-gray-800 font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Expertise
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
