
import React from 'react';
import ProgressBar from './ProgressBar';

interface ServiceComparisonProps {
  serviceName: string;
  description?: string;
  billed: number;
  average: number;
  difference: number;
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({
  serviceName,
  description,
  billed,
  average,
  difference
}) => {
  const isHigher = billed > average;
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
      <h3 className="font-semibold mb-1">{serviceName}</h3>
      {description && <p className="text-sm text-gray-500 mb-3">{description}</p>}
      
      <div className="flex justify-between mb-2">
        <span className="text-sm">National Average</span>
        <span className="font-medium">${average}</span>
      </div>
      
      <div className="flex justify-between mb-2">
        <span className="text-sm">Your Bill</span>
        <span className="font-medium">${billed}</span>
      </div>
      
      <ProgressBar 
        value={average} 
        max={Math.max(billed, average)} 
        color={isHigher ? "bg-secondary-blue" : "bg-green-500"}
      />
      
      <div className="mt-4 text-right">
        <span className={`text-sm font-medium ${isHigher ? 'text-red-500' : 'text-green-500'}`}>
          {isHigher ? `$${difference} above average` : `$${-difference} below average`}
        </span>
      </div>
    </div>
  );
};

export default ServiceComparison;
