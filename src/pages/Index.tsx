
import React, { useState } from 'react';
import Header from '@/components/Header';
import ActionCard from '@/components/ActionCard';
import BillSummary from '@/components/BillSummary';
import NavBar from '@/components/NavBar';
import { File, Search, ChartBar, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [userName] = useState('Sarah');
  
  // Mock data
  const recentBills = [
    {
      id: 1,
      provider: 'City General Hospital',
      date: 'May 10, 2023',
      totalAmount: 1250,
      estimatedOvercharge: 320,
      status: 'reviewing' as const,
    },
    {
      id: 2,
      provider: 'Westside Medical Center',
      date: 'April 2, 2023',
      totalAmount: 560,
      estimatedOvercharge: 120,
      status: 'resolved' as const,
    }
  ];

  return (
    <div className="min-h-screen bg-primary-light pb-20">
      <div className="gradient-bg pt-10 pb-6 px-4 rounded-b-3xl shadow-md">
        <Header />
        <div className="mt-6 text-white">
          <h1 className="text-2xl font-bold">Hi {userName},</h1>
          <p className="opacity-90">Let's review your recent bills</p>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm opacity-90">Total Savings</p>
              <h2 className="text-white text-2xl font-bold">$440</h2>
            </div>
            <button 
              onClick={() => navigate('/profile')}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <ActionCard
            icon={<File size={24} className="text-primary-blue" />}
            title="Scan a Bill"
            description="Upload or take a photo of your medical bill"
            to="/scan-bill"
            color="bg-primary-light"
          />
          <ActionCard
            icon={<Search size={24} className="text-secondary-blue" />}
            title="Compare Costs"
            description="Find fair prices for procedures nearby"
            to="/compare"
            color="bg-blue-50"
          />
          <ActionCard
            icon={<ChartBar size={24} className="text-green-600" />}
            title="View Savings"
            description="Track your total healthcare savings"
            to="/profile"
            color="bg-green-50"
          />
          <ActionCard
            icon={<Bell size={24} className="text-orange-500" />}
            title="Notifications"
            description="Check updates on your bill disputes"
            to="/notifications"
            color="bg-orange-50"
          />
        </div>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Recent Bills</h2>
        {recentBills.map(bill => (
          <BillSummary
            key={bill.id}
            provider={bill.provider}
            date={bill.date}
            totalAmount={bill.totalAmount}
            estimatedOvercharge={bill.estimatedOvercharge}
            status={bill.status}
            onClick={() => navigate(`/bills/${bill.id}`)}
          />
        ))}
        
        <div className="mt-6 mb-10 text-center">
          <button 
            onClick={() => navigate('/bills')}
            className="text-primary-blue font-medium hover:underline"
          >
            View All Bills
          </button>
        </div>
      </div>
      
      <NavBar />
    </div>
  );
};

export default Index;
