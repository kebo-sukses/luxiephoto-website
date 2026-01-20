import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Eye, Heart, X } from 'lucide-react';
import { portfolioItems } from '@/data/mock';
import { SectionTitle, Button, OptimizedImage, StaggerContainer, StaggerItem } from '@/components/common';
import { cn } from '@/utils/helpers';

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <SectionTitle
          subtitle="Our Portfolio"
          decorativeText="Gallery"
          title="Beautiful Love Stories"
          description="Browse through our collection of timeless wedding photographs capturing the most precious moments."
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300',
                activeFilter === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.08}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isLarge = index === 1 || index === 6;
              
              return (
                <StaggerItem
                  key={item.id}
                  className={cn(isLarge && 'md:row-span-2')}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative h-full"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image Container */}
                    <div
                      className={cn(
                        'relative overflow-hidden rounded-2xl cursor-pointer',
                        isLarge ? 'aspect-[3/5]' : 'aspect-[3/4]'
                      )}
                      onClick={() => setSelectedItem(item)}
                    >
                      <OptimizedImage
                        src={item.image}
                        alt={item.names}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                        containerClassName="w-full h-full"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredId === item.id ? 1 : 0,
                          y: hoveredId === item.id ? 0 : 20
                        }}
                        className="absolute top-4 right-4 flex gap-2"
                      >
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-all">
                          <Heart className="w-4 h-4" />
                        </button>
                      </motion.div>

                      {/* Content Overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredId === item.id ? 1 : 0,
                          y: hoveredId === item.id ? 0 : 20
                        }}
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                      >
                        <span className="text-xs uppercase tracking-wider text-primary-300 mb-1 block">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-xl mb-2">{item.names}</h3>
                        <div className="flex items-center text-sm text-white/70">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </motion.div>
                    </div>

                    {/* Info Below Image (visible on non-hover) */}
                    <div className="mt-4 text-center group-hover:opacity-0 transition-opacity">
                      <span className="font-serif italic text-2xl text-gray-200 block">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-gray-900 -mt-2 relative z-10">
                        {item.names}
                      </h3>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </AnimatePresence>
        </StaggerContainer>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => window.location.href = '/portfolio'}
          >
            View Full Gallery
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <OptimizedImage
                  src={selectedItem.image}
                  alt={selectedItem.names}
                  className="w-full h-full"
                  containerClassName="w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="mt-6 text-center text-white">
                <span className="text-primary-400 text-sm uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-3xl mt-2">{selectedItem.names}</h3>
                <div className="flex items-center justify-center text-gray-400 mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedItem.location}
                </div>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
