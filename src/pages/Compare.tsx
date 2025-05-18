
import React, { useState } from 'react';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import ProviderCard from '@/components/ProviderCard';
import { Search } from 'lucide-react';

const Compare = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('MRI Scan');
  
  // Mock data for services and providers
  const commonServices = [
    'MRI Scan', 'X-Ray', 'Annual Physical', 'Blood Test', 
    'Ultrasound', 'CT Scan', 'Colonoscopy', 'Mammogram'
  ];
  
  const providers = [
    {
      id: 1,
      name: 'City General Hospital',
      distance: '2.3 miles',
      rating: 4.2,
      price: 1200,
      averagePrice: 1600
    },
    {
      id: 2,
      name: 'Westside Medical Center',
      distance: '4.1 miles',
      rating: 4.5,
      price: 950,
      averagePrice: 1600
    },
    {
      id: 3,
      name: 'University Health',
      distance: '5.8 miles',
      rating: 4.7,
      price: 1450,
      averagePrice: 1600
    },
    {
      id: 4,
      name: 'Lakeside Clinic',
      distance: '3.2 miles',
      rating: 4.0,
      price: 1100,
      averagePrice: 1600
    }
  ];
  
  const filteredProviders = providers.sort((a, b) => a.price - b.price);
  
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };
  
  return (
    <div className="min-h-screen bg-primary-light pb-24">
      <div className="gradient-bg pt-6 pb-8 px-4 rounded-b-3xl shadow-md">
        <Header title="Compare Costs" />
        <div className="mt-8 text-white">
          <h1 className="text-2xl font-bold">Compare Healthcare Costs</h1>
          <p className="mt-2 opacity-90">Find fair prices for procedures near you</p>
        </div>
        
        <div className="mt-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for a procedure or service..."
            className="w-full bg-white/90 backdrop-blur-sm text-gray-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold mb-4">Common Services</h2>
        <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-1">
          {commonServices.map((service) => (
            <button
              key={service}
              onClick={() => handleServiceSelect(service)}
              className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap text-sm ${
                selectedService === service
                  ? 'bg-primary-blue text-white'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {service}
            </button>
          ))}
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Providers for {selectedService}</h2>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-secondary-blue"></span>
              <span>Best Value</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-500">National Average</span>
              <span className="font-semibold">${1600}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gray-300 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          
          {filteredProviders.map((provider) => (
            <ProviderCard
              key={provider.id}
              name={provider.name}
              distance={provider.distance}
              rating={provider.rating}
              price={provider.price}
              averagePrice={provider.averagePrice}
              onClick={() => window.alert(`View details for ${provider.name}`)}
            />
          ))}
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-3">
              Prices are estimates and may vary based on your insurance
            </p>
            <button className="text-primary-blue text-sm font-medium underline">
              Learn More About Cost Comparison
            </button>
          </div>
        </div>
      </div>
      
      <NavBar />
    </div>
  );
};

export default Compare;
