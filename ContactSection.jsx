import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { contactInfo } from '../../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-4">
              Book Now
            </p>
            <span className="font-serif italic text-4xl text-gray-200 block mb-2">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 -mt-3">
              Are you interested to work with me? Get in touch
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod sed tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam nostrud exercitation ullamco.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-pink-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-pink-500 transition-colors"
                />
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-pink-500 transition-colors resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-pink-500 transition-colors duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;