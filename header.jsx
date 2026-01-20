import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigationLinks } from '../../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span
            className={`font-serif text-2xl md:text-3xl italic tracking-wide transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-black' : 'text-white'
            }`}
          >
            Luxie<span className="text-pink-500">Photo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`flex items-center space-x-1 text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled || !isHomePage
                    ? 'text-gray-800 hover:text-pink-500'
                    : 'text-white hover:text-pink-300'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown */}
              {link.hasDropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-xl py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-black' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-black' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-white z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="p-6 space-y-4">
          {navigationLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className="block py-2 text-gray-800 font-medium tracking-wider uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block py-1.5 text-sm text-gray-600 hover:text-pink-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;