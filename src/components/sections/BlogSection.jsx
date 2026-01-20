import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/mock';
import { SectionTitle, Button, OptimizedImage, StaggerContainer, StaggerItem } from '@/components/common';

const BlogSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="relative z-10">
          <SectionTitle
            subtitle="Our Blog"
            decorativeText="Insights"
            title="Latest Stories & Tips"
            description="Wedding inspiration, photography tips, and behind-the-scenes stories from our recent shoots."
          />
        </div>

        {/* Blog Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {blogPosts.map((post, index) => (
            <StaggerItem key={post.id}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    containerClassName="w-full h-full"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-primary-500 shadow-lg">
                      {post.category}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-500" />
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors group/link"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => window.location.href = '/blog'}
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
