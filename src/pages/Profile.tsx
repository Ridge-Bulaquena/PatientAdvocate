
import React from 'react';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import { ChevronRight, User, Bell, FileText, Settings, Shield, ArrowUp, FileCheck } from 'lucide-react';
import ProgressBar from '@/components/ProgressBar';

const Profile = () => {
  // Mock user data
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    totalSaved: 440,
    billsAnalyzed: 3,
    disputesFiled: 2,
    disputesWon: 1,
    disputesPending: 1
  };
  
  return (
    <div className="min-h-screen bg-primary-light pb-24">
      <div className="gradient-bg pt-6 pb-8 px-4 rounded-b-3xl shadow-md">
        <Header title="Profile" />
        <div className="mt-6 flex items-center">
          <div className="w-20 h-20 bg-white rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4 text-white">
            <h1 className="text-xl font-bold">{userData.name}</h1>
            <p className="opacity-90 text-sm">{userData.email}</p>
          </div>
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <h3 className="font-semibold mb-4">Your Savings</h3>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-500">Total Saved</p>
              <h2 className="text-3xl font-bold text-primary-blue">${userData.totalSaved}</h2>
            </div>
            <div className="bg-green-50 p-2 rounded-lg flex items-center">
              <ArrowUp size={16} className="text-green-600" />
              <span className="text-green-600 text-sm font-medium ml-1">23%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-blue-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <FileText size={20} className="text-primary-blue" />
              </div>
              <p className="text-xs text-gray-500">Bills Analyzed</p>
              <p className="font-bold">{userData.billsAnalyzed}</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <FileCheck size={20} className="text-orange-500" />
              </div>
              <p className="text-xs text-gray-500">Disputes Filed</p>
              <p className="font-bold">{userData.disputesFiled}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <Shield size={20} className="text-green-600" />
              </div>
              <p className="text-xs text-gray-500">Disputes Won</p>
              <p className="font-bold">{userData.disputesWon}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="font-semibold">Account</h3>
          </div>
          
          <div>
            <MenuItem
              icon={<User size={18} className="text-primary-blue" />}
              label="Personal Information"
            />
            <MenuItem
              icon={<Bell size={18} className="text-primary-blue" />}
              label="Notifications"
              badge="2"
            />
            <MenuItem
              icon={<FileText size={18} className="text-primary-blue" />}
              label="My Documents"
            />
            <MenuItem
              icon={<Settings size={18} className="text-primary-blue" />}
              label="Settings"
              isLast
            />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <h3 className="font-semibold mb-3">Active Disputes</h3>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium">City General Hospital</p>
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">Dispute filed on May 12, 2023</p>
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span className="font-medium">70%</span>
            </div>
            <ProgressBar value={70} max={100} color="bg-primary-blue" />
          </div>
        </div>
        
        <div className="mt-8 mb-6 text-center">
          <button 
            className="text-gray-500 text-sm"
            onClick={() => window.alert('This would sign the user out')}
          >
            Sign Out
          </button>
        </div>
      </div>
      
      <NavBar />
    </div>
  );
};

// Menu item component for account section
const MenuItem = ({ 
  icon, 
  label, 
  badge, 
  isLast = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  badge?: string;
  isLast?: boolean;
}) => {
  return (
    <div className={`px-5 py-4 flex items-center justify-between ${!isLast ? 'border-b border-gray-100' : ''}`}>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
          {icon}
        </div>
        <span>{label}</span>
      </div>
      <div className="flex items-center">
        {badge && (
          <div className="bg-primary-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3">
            {badge}
          </div>
        )}
        <ChevronRight size={18} className="text-gray-400" />
      </div>
    </div>
  );
};

export default Profile;
