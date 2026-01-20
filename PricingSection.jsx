import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/mock';

const PricingSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm tracking-widest uppercase mb-4">
            Pricing
          </p>
          <span className="font-serif italic text-4xl text-gray-200 block mb-2">
            Choose Your
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 -mt-3">
            Choose Your Packages
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-lg p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-pink-500 shadow-lg' : 'shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-4 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-medium text-gray-900 text-center mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <span className="text-5xl font-serif text-gray-900">${plan.price}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                  plan.popular
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;