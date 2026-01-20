import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/mock';

const BlogSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm tracking-widest uppercase mb-4">
            Our Blog
          </p>
          <span className="font-serif italic text-4xl text-gray-200 block mb-2">
            Latest Articles
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 -mt-3">
            Latest Blog & Articles
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-xs tracking-widest uppercase text-gray-700 hover:text-pink-500 transition-colors"
                >
                  READ MORE <ArrowRight className="w-3 h-3 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;