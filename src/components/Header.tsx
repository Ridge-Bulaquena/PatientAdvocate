
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "PatientAdvocate", 
  showBackButton = false 
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-between py-4 px-4">
      <div className="flex items-center">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)} 
            className="mr-3 p-2 rounded-full bg-white/90 shadow-sm"
          >
            <ArrowLeft size={20} className="text-primary-blue" />
          </button>
        )}
        <div className="flex items-center">
          <div className="bg-primary-blue rounded-full p-2 mr-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden">
        <img 
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
