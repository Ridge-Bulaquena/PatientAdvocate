
import React from 'react';
import Header from '@/components/Header';
import ServiceComparison from '@/components/ServiceComparison';
import NavBar from '@/components/NavBar';
import { ArrowRight, AlertTriangle, FileText, Download, MessageCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const BillAnalysis = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data
  const billData = {
    provider: 'City General Hospital',
    date: 'May 10, 2023',
    totalAmount: 1250,
    fairEstimate: 930,
    services: [
      {
        name: 'Emergency Room Visit',
        description: 'Level 3 (CPT: 99283)',
        billed: 650,
        average: 450,
        difference: 200
      },
      {
        name: 'Basic Metabolic Panel',
        description: 'Blood test (CPT: 80048)',
        billed: 120,
        average: 80,
        difference: 40
      },
      {
        name: 'X-Ray, Chest',
        description: '2 Views (CPT: 71046)',
        billed: 280,
        average: 220,
        difference: 60
      },
      {
        name: 'Medication',
        description: 'Prescription antibiotic',
        billed: 200,
        average: 180,
        difference: 20
      }
    ]
  };
  
  const totalSavings = billData.totalAmount - billData.fairEstimate;
  const savingsPercentage = Math.round((totalSavings / billData.totalAmount) * 100);
  
  return (
    <div className="min-h-screen bg-primary-light pb-24">
      <div className="gradient-bg pt-6 pb-8 px-4 rounded-b-3xl shadow-md">
        <Header showBackButton title="Bill Analysis" />
        <div className="mt-8 text-white">
          <h2 className="text-lg font-medium opacity-90">{billData.provider}</h2>
          <h1 className="text-2xl font-bold mt-1">You're being overcharged</h1>
          
          <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <AlertTriangle size={18} className="mr-2 text-yellow-300" />
                  <p className="text-yellow-100">Potential savings</p>
                </div>
                <h2 className="text-white text-3xl font-bold mt-1">${totalSavings}</h2>
                <p className="text-white text-sm opacity-90 mt-1">
                  That's {savingsPercentage}% of your total bill
                </p>
              </div>
              
              <button 
                onClick={() => navigate('/dispute-builder/' + id)}
                className="bg-white text-primary-blue px-5 py-2 rounded-lg text-sm font-medium shadow-lg"
              >
                Dispute Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Breakdown of Charges</h2>
          <button onClick={() => navigate('/bills/' + id)} className="text-primary-blue text-sm">
            View Bill
          </button>
        </div>
        
        {billData.services.map((service, index) => (
          <ServiceComparison
            key={index}
            serviceName={service.name}
            description={service.description}
            billed={service.billed}
            average={service.average}
            difference={service.difference}
          />
        ))}
        
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4 mt-6">
          <h3 className="font-semibold mb-4">Your Options</h3>
          
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/dispute-builder/' + id)}
              className="w-full flex items-center justify-between bg-primary-blue/10 hover:bg-primary-blue/15 text-primary-blue p-3 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <MessageCircle size={20} className="mr-3" />
                <span>Create a Dispute Letter</span>
              </div>
              <ArrowRight size={18} />
            </button>
            
            <button 
              className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors"
              onClick={() => window.alert('This would download a detailed PDF report')}
            >
              <div className="flex items-center">
                <Download size={20} className="mr-3" />
                <span>Download Analysis Report</span>
              </div>
              <ArrowRight size={18} />
            </button>
            
            <button 
              className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors"
              onClick={() => window.alert('This would connect you with a billing advocate')}
            >
              <div className="flex items-center">
                <FileText size={20} className="mr-3" />
                <span>Talk to a Billing Advocate</span>
              </div>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <NavBar />
    </div>
  );
};

export default BillAnalysis;
