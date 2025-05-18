
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProviderCardProps {
  name: string;
  distance: string;
  rating: number;
  price: number;
  averagePrice: number;
  onClick?: () => void;
}

const ProviderCard: React.FC<ProviderCardProps> = ({
  name,
  distance,
  rating,
  price,
  averagePrice,
  onClick
}) => {
  const savings = averagePrice - price;
  const savingsPercentage = Math.round((savings / averagePrice) * 100);
  
  return (
    <div 
      className="bg-white rounded-xl p-4 shadow-sm mb-4 flex justify-between items-center"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div>
        <h3 className="font-semibold">{name}</h3>
        <div className="flex items-center mt-1 text-sm text-gray-500">
          <span>{distance} away</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="ml-1">{rating}</span>
          </div>
        </div>
        <div className="mt-2">
          <span className="font-bold text-lg">${price}</span>
          <span className="text-green-600 text-sm ml-2">
            {savingsPercentage > 0 ? `${savingsPercentage}% below average` : 'Average price'}
          </span>
        </div>
      </div>
      
      <button className="text-primary-blue hover:bg-primary-light p-2 rounded-full transition-colors">
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default ProviderCard;
