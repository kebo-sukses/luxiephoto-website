import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioItems } from '../../data/mock';

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Portfolio Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => {
            // Vary heights for masonry effect
            const isLarge = index === 1 || index === 6;
            
            return (
              <div
                key={item.id}
                className={`group ${
                  isLarge ? 'md:row-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-4">
                  <img
                    src={item.image}
                    alt={item.names}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="text-center">
                  {/* Decorative Script */}
                  <span className="font-serif italic text-2xl text-gray-200 block">
                    {item.category}
                  </span>
                  
                  {/* Names */}
                  <h3 className="font-serif text-xl text-gray-900 -mt-3 relative z-10">
                    {item.names}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 mt-2 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-xs tracking-widest uppercase text-gray-700 hover:text-pink-500 transition-colors"
                  >
                    VIEW DETAILS <ArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-pink-500 transition-colors duration-300">
            View All Wedding
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;