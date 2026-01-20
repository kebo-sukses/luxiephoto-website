import React from 'react';
import { Camera, Video, Brush, ArrowRight } from 'lucide-react';
import { aboutContent, services } from '../../data/mock';

const iconMap = {
  Camera: Camera,
  Video: Video,
  Brush: Brush
};

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Subtitle */}
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-4">
              {aboutContent.subtitle}
            </p>

            {/* Decorative Script */}
            <span className="font-serif italic text-4xl text-gray-200 block mb-2">
              About Us
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              {aboutContent.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {aboutContent.description}
            </p>

            {/* Signature */}
            <div className="font-serif italic text-3xl text-gray-800">
              {aboutContent.signature}
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs tracking-widest uppercase text-gray-700 hover:text-pink-500 transition-colors"
                  >
                    READ MORE <ArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </div>
              );
            })}

            {/* Large Image Card */}
            <div className="sm:col-span-2 lg:col-span-1 relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600"
                alt="Wedding couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;