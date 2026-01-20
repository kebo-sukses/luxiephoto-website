import React, { useState, useEffect } from 'react';
import { Play, Facebook, Twitter, Instagram } from 'lucide-react';
import { heroContent } from '../../data/mock';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Background Text Decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[15vw] font-serif italic text-gray-800/20 whitespace-nowrap">
          Wedding
        </span>
      </div>
      <div className="absolute bottom-20 left-10 pointer-events-none select-none">
        <span className="text-[12vw] font-serif italic text-gray-800/15 whitespace-nowrap">
          Photography
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full pt-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Hero Text */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Make A Wonderful Story
              <br />
              <span className="italic">For Your Wedding</span>
            </h1>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-3 border-2 border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              View Portfolio
            </button>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <div className="relative aspect-video max-w-lg mx-auto lg:ml-auto">
              {/* Video Thumbnail */}
              <div
                className="relative rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                <img
                  src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85&w=600"
                  alt="Wedding Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="absolute -right-4 top-0 bg-white p-4 rounded-lg shadow-xl w-48 transform translate-x-1/4 hidden lg:block">
                <h4 className="font-medium text-sm text-gray-900">Wedding Videography</h4>
                <p className="text-xs text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-xs text-pink-500 mt-2 inline-flex items-center hover:underline">
                  READ MORE <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/PEIgbYXgKQk?autoplay=1"
              title="Wedding Video"
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;