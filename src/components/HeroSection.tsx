import React from 'react';
import { ArrowRight, Coffee, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-900">GetSome Coffee</div>
          <div className="hidden md:flex space-x-8">
            <a href="#menu" className="text-amber-900 hover:text-amber-700">Menu</a>
            <a href="#franchise" className="text-amber-900 hover:text-amber-700">Franchise</a>
            <a href="#locations" className="text-amber-900 hover:text-amber-700">Locations</a>
            <a href="#about" className="text-amber-900 hover:text-amber-700">About</a>
          </div>
          <button className="bg-amber-900 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="pt-32 md:pt-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span className="text-amber-900">Premium Coffee Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 leading-tight">
              Elevate Your Daily Coffee Ritual
            </h1>
            
            <p className="text-lg text-amber-800">
              Experience the perfect blend of premium beans, expert craftsmanship, and warm hospitality. Join us in creating memorable coffee moments.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-full hover:bg-amber-800 transition-colors">
                <span>Find a Location</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-full hover:bg-amber-50 transition-colors">
                <Coffee className="w-5 h-5" />
                <span>View Menu</span>
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">50+</div>
                <div className="text-sm text-amber-700">Locations</div>
              </div>
              <div className="h-8 w-px bg-amber-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">15k+</div>
                <div className="text-sm text-amber-700">Happy Customers</div>
              </div>
              <div className="h-8 w-px bg-amber-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">4.9</div>
                <div className="text-sm text-amber-700">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-amber-200 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5"></div>
            <div className="relative z-10">
              <img
                src="/api/placeholder/600/600"
                alt="Premium Coffee Cup"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-100 to-transparent"></div>
      <div className="absolute top-40 left-10 w-20 h-20 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};

export default HeroSection;