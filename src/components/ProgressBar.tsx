
import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  showValue?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max, 
  color = 'bg-secondary-blue', 
  showValue = false 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="w-full">
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>${value}</span>
          <span>${max}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
