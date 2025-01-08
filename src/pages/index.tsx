import React from 'react';
import Head from 'next/head';
import { Coffee, Award, Globe, Leaf } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Getsome Coffee - Premium Coffee Experience</title>
        <meta name="description" content="Getsome Coffee: Innovative coffee franchise with a passion for quality and sustainability" />
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-brown-600 to-brown-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Getsome Coffee: Brewing Possibilities</h1>
          <p className="text-xl mb-10">A unique coffee franchise focused on premium experiences, innovation, and sustainable practices</p>
          <div className="flex justify-center space-x-6">
            <a href="/franchise" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Franchise Opportunities
            </a>
            <a href="/menu" className="border-2 border-white hover:bg-white hover:text-brown-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Explore Our Menu
            </a>
          </div>
        </div>
      </header>

      {/* Unique Value Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Unique Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovative Coffee Experiences */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Coffee className="mx-auto text-brown-600 mb-4" size={64} />
              <h3 className="font-bold text-xl mb-4">Innovative Coffee Concepts</h3>
              <p>Developing unique café networks and cloud kitchen models</p>
            </div>

            {/* Franchise Support */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="mx-auto text-brown-600 mb-4" size={64} />
              <h3 className="font-bold text-xl mb-4">Comprehensive Franchising</h3>
              <p>Robust support and training programs for franchisees</p>
            </div>

            {/* Global Perspective */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Globe className="mx-auto text-brown-600 mb-4" size={64} />
              <h3 className="font-bold text-xl mb-4">Coffee Tourism</h3>
              <p>Exploring coffee culture and experiential activities</p>
            </div>

            {/* Sustainability */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Leaf className="mx-auto text-brown-600 mb-4" size={64} />
              <h3 className="font-bold text-xl mb-4">Sustainable Practices</h3>
              <p>Coffee waste recycling and agricultural support for farmers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research and Development */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Excellence</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Continuous Innovation</h3>
              <ul className="space-y-4 text-gray-700">
                <li>• Scientific research on coffee varieties and processing methods</li>
                <li>• Development of unique coffee blends and brewing techniques</li>
                <li>• Food science research related to coffee and beverages</li>
                <li>• Sustainable packaging and waste management solutions</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Training and Education</h3>
              <p className="mb-4">We provide comprehensive training programs including:</p>
              <ul className="space-y-3 text-gray-700">
                <li>• Barista skills development</li>
                <li>• Café operations management</li>
                <li>• Technical-vocational education for coffee professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brown-700 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Getsome Coffee Family?</h2>
          <p className="text-xl mb-10">Whether you're a coffee enthusiast, entrepreneur, or passionate about innovation, we have opportunities for you.</p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Contact Us
            </a>
            <a href="/franchise" className="border-2 border-white hover:bg-white hover:text-brown-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Franchise Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;