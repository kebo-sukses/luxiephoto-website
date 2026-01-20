import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { footerGallery, contactInfo } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl italic tracking-wide text-white">
                Luxie<span className="text-pink-500">Photo</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Other Pages */}
          <div>
            <h4 className="text-lg font-medium mb-6">Other Pages</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Contact', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 text-sm hover:text-pink-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Term Of Service', 'Disclaimer', 'Credits', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 text-sm hover:text-pink-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Projects */}
          <div>
            <h4 className="text-lg font-medium mb-6">Latest Projects</h4>
            <div className="grid grid-cols-3 gap-2">
              {footerGallery.map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-sm">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Wedding Photography Theme. Built with Love.</p>
          <p>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;