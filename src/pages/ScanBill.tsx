
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Upload, Camera, FileText, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ScanBill = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState('');
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileSelected(true);
      setFileName(e.target.files[0].name);
      
      // Simulate upload process
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        toast.success("Bill uploaded successfully!");
        setTimeout(() => {
          navigate('/bill-analysis/new');
        }, 500);
      }, 2000);
    }
  };
  
  return (
    <div className="min-h-screen bg-primary-light">
      <div className="gradient-bg pt-6 pb-8 px-4 rounded-b-3xl shadow-md">
        <Header showBackButton title="Scan Bill" />
        <div className="mt-8 text-center text-white">
          <h1 className="text-2xl font-bold">Upload Your Medical Bill</h1>
          <p className="mt-2 opacity-90">We'll analyze it and find potential savings</p>
        </div>
      </div>
      
      <div className="px-6 mt-8">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
              <FileText size={32} className="text-primary-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload PDF or Image</h3>
            <p className="text-gray-500 text-center mb-6">
              Select a file from your device or take a photo
            </p>
            
            <div className="w-full">
              <label 
                htmlFor="file-upload" 
                className="w-full flex items-center justify-center py-3 px-4 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 cursor-pointer transition-colors"
              >
                <Upload size={20} className="mr-2" />
                Choose File
              </label>
              <input 
                id="file-upload" 
                type="file" 
                accept=".pdf,.jpg,.jpeg,.png" 
                className="hidden" 
                onChange={handleFileChange}
                disabled={uploading}
              />
            </div>
            
            <div className="my-4 flex items-center w-full">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="px-4 text-gray-400 text-sm">or</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            
            <button 
              className="w-full flex items-center justify-center py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => toast.info("Camera functionality would open here")}
            >
              <Camera size={20} className="mr-2" />
              Take a Photo
            </button>
          </div>
        </div>
        
        {fileSelected && (
          <div className="bg-white rounded-2xl shadow-md p-4 mb-6 animate-enter">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <FileText size={20} className="text-primary-blue" />
              </div>
              <div className="flex-1">
                <p className="font-medium truncate">{fileName}</p>
                <div className="mt-1">
                  {uploading ? (
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-blue rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  ) : (
                    <div className="flex items-center text-green-600">
                      <Check size={16} className="mr-1" />
                      <span className="text-xs">Uploaded</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-500">
          <h4 className="font-medium text-gray-700 mb-2">Tips for best results:</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Make sure all charges and codes are clearly visible</li>
            <li>Include the provider name and date of service</li>
            <li>Upload all pages of multi-page bills</li>
          </ul>
        </div>
        
        <div className="mt-8 mb-6 flex justify-center">
          <button 
            className="gradient-bg text-white py-3 px-8 rounded-xl font-medium flex items-center disabled:opacity-70"
            onClick={() => navigate('/bill-analysis/new')}
            disabled={!fileSelected || uploading}
          >
            Continue
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanBill;
