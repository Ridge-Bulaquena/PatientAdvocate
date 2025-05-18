
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Check, Send, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const DisputeBuilder = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [letterContent, setLetterContent] = useState(`To Whom It May Concern at City General Hospital,

I am writing to dispute charges on my medical bill dated May 10, 2023 (Account #: 12345-ABC).

After reviewing my bill and comparing it to national average costs for these services, I believe I have been overcharged for the following items:

1. Emergency Room Visit (CPT: 99283) - Billed $650, National Average: $450
2. Basic Metabolic Panel (CPT: 80048) - Billed $120, National Average: $80
3. X-Ray, Chest (CPT: 71046) - Billed $280, National Average: $220

Based on this analysis, I am requesting an adjustment to my bill to reflect fair market prices for these services. I am prepared to pay $930, which represents the fair market value for the care I received.

Please review these charges and respond in writing regarding your decision. If you have any questions or need additional information, please contact me at (555) 123-4567 or patient@email.com.

Thank you for your prompt attention to this matter.

Sincerely,
Sarah Johnson`);

  const handleSendDispute = () => {
    toast.success("Dispute letter sent successfully!");
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen bg-primary-light pb-6">
      <div className="gradient-bg pt-6 pb-8 px-4 rounded-b-3xl shadow-md">
        <Header showBackButton title="Dispute Builder" />
        <div className="mt-8 text-white">
          <h1 className="text-2xl font-bold">Your Dispute Letter</h1>
          <p className="mt-2 opacity-90">
            We've drafted a letter based on your bill analysis
          </p>
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Check size={16} className="text-green-600" />
              </div>
              <h3 className="font-semibold">Auto-Generated Letter</h3>
            </div>
            <p className="text-sm text-gray-500">
              This letter has been customized based on your specific bill. 
              Feel free to edit it before sending.
            </p>
          </div>
          
          <textarea
            value={letterContent}
            onChange={(e) => setLetterContent(e.target.value)}
            className="w-full h-64 border border-gray-300 rounded-lg p-4 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          ></textarea>
          
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>Character count: {letterContent.length}</span>
            <span className="mx-2">•</span>
            <span>Word count: {letterContent.split(/\s+/).filter(Boolean).length}</span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <h3 className="font-semibold mb-3">Delivery Options</h3>
          
          <div className="space-y-4">
            <button
              onClick={handleSendDispute}
              className="w-full flex items-center justify-center py-3 px-4 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 transition-colors"
            >
              <Send size={18} className="mr-2" />
              Send to Provider
            </button>
            
            <button
              onClick={() => toast.info("Letter would be downloaded as PDF")}
              className="w-full flex items-center justify-center py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download size={18} className="mr-2" />
              Download as PDF
            </button>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          <p className="font-medium mb-2">What happens next?</p>
          <p>
            After sending your dispute, the provider typically responds within 30 days. 
            We'll notify you when they respond and help you with the next steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisputeBuilder;
