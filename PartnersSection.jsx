import React from 'react';
import { partners } from '../../data/mock';

const PartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-4">
              Partners
            </p>
            <span className="font-serif italic text-4xl text-gray-200 block mb-2">
              Collaboration
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 -mt-3">
              Collaboration With
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud exercitation ullamco.
            </p>
            <button className="px-6 py-3 border-2 border-black text-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
              View All
            </button>
          </div>

          {/* Partners Logos - Marquee Effect */}
          <div className="lg:col-span-2 overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                >
                  <span className="font-serif italic text-2xl text-gray-700">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;