import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Heart
} from 'lucide-react';
import { footerGallery, contactInfo, navigationLinks } from '@/data/mock';
import { OptimizedImage } from '@/components/common';
import { cn } from '@/utils/helpers';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/luxiephoto', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/luxiephoto', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/luxiephoto', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/luxiephoto', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'FAQ', path: '/faq' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="font-serif text-3xl md:text-4xl mb-4">
              Stay <span className="italic text-primary-400">Inspired</span>
            </h3>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for wedding tips, inspiration, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-primary-500 text-white font-medium tracking-wider uppercase text-sm rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <motion.div
          className="container-custom py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <span className="font-serif text-3xl italic text-white">
                  Luxie<span className="text-primary-500">Photo</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Capturing timeless moments and transforming them into beautiful memories. 
                Your story deserves to be told beautifully.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-medium mb-6 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-primary-400 transition-colors inline-flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-medium mb-6 relative">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500" />
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{contactInfo.address}</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Instagram Feed */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-medium mb-6 relative">
                Latest Work
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500" />
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {footerGallery.map((img, index) => (
                  <motion.a
                    key={index}
                    href="https://instagram.com/luxiephoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square overflow-hidden rounded-lg group"
                  >
                    <OptimizedImage
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} LuxiePhoto. Made with 
              <Heart className="w-4 h-4 text-primary-500 fill-primary-500" /> 
              for your special moments.
            </p>
            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-500 text-sm hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
