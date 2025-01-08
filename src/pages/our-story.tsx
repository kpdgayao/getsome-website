import React from 'react';
import Head from 'next/head';
import { Target, Globe, Lightbulb } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const OurStoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <title>Getsome Coffee - Our Story</title>
        <meta name="description" content="The mission and vision behind Getsome Coffee" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <SectionHeader 
          title="Our Journey" 
          subtitle="From a vision to a thriving coffee community"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="coffee" className="hover:shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="text-coffee-500 mr-3" size={32} />
              <h3 className="text-xl font-bold text-coffee-800">Our Mission</h3>
            </div>
            <p className="text-coffee-700">
              To transform coffee from a luxury to a daily necessity, delivering premium experiences 
              accessible to everyone through innovative franchise models and sustainable practices.
            </p>
          </Card>

          <Card variant="coffee" className="hover:shadow-lg">
            <div className="flex items-center mb-4">
              <Globe className="text-coffee-500 mr-3" size={32} />
              <h3 className="text-xl font-bold text-coffee-800">Global Perspective</h3>
            </div>
            <p className="text-coffee-700">
              We're more than a coffee brand. We're a global community passionate about coffee culture, 
              farmer support, and creating meaningful connections through every cup.
            </p>
          </Card>

          <Card variant="coffee" className="hover:shadow-lg">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-coffee-500 mr-3" size={32} />
              <h3 className="text-xl font-bold text-coffee-800">Innovation Drive</h3>
            </div>
            <p className="text-coffee-700">
              Continuously pushing boundaries in coffee research, brewing techniques, 
              and sustainable technology to redefine the coffee experience.
            </p>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-coffee-600 to-coffee-800 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Founding Story</h2>
          <p className="max-w-4xl mx-auto text-lg">
            Founded in Baguio City, Getsome Coffee began with a simple belief: coffee should be 
            an accessible, innovative experience that connects people. From our first outlet to 
            our growing franchise network, we've remained committed to quality, sustainability, 
            and community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;