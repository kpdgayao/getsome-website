import React, { useState } from 'react';
import Head from 'next/head';
import { MapPin, Clock } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const locations = [
  {
    name: 'Baguio City Main',
    address: '#1 Yangco Street cor. Brent Road',
    hours: '7:00 AM - 10:00 PM',
    available: true
  },
  {
    name: 'La Trinidad Branch',
    address: 'Windy Hill Central, Buyagan Poblacion',
    hours: '6:30 AM - 9:30 PM',
    available: true
  },
  {
    name: 'San Juan Branch',
    address: 'Pentecostal Compound, MacArthur Highway',
    hours: '7:30 AM - 9:00 PM',
    available: true
  }
];

const LocationsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredLocations = activeFilter === 'all' 
    ? locations 
    : locations.filter(loc => loc.available);

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <title>Getsome Coffee - Our Locations</title>
        <meta name="description" content="Find a Getsome Coffee location near you" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <SectionHeader 
          title="Our Coffee Locations" 
          subtitle="Discover convenient Getsome Coffee outlets across the region"
        />

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 inline-flex space-x-2 shadow-md">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'all' ? 'bg-coffee-500 text-white' : 'text-coffee-700'}`}
            >
              All Locations
            </button>
            <button 
              onClick={() => setActiveFilter('open')}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === 'open' ? 'bg-coffee-500 text-white' : 'text-coffee-700'}`}
            >
              Open Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location, index) => (
            <Card key={index} variant="coffee" className="hover:shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="text-coffee-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-coffee-800">{location.name}</h3>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="text-coffee-400 mr-3" size={20} />
                <p className="text-coffee-700">{location.hours}</p>
              </div>
              <p className="text-coffee-600 italic">{location.address}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;