
import { ArrowRight } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface BillSummaryProps {
  provider: string;
  date: string;
  totalAmount: number;
  estimatedOvercharge: number;
  status: 'pending' | 'reviewing' | 'disputed' | 'resolved';
  onClick?: () => void;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  reviewing: 'bg-blue-100 text-blue-800',
  disputed: 'bg-orange-100 text-orange-800',
  resolved: 'bg-green-100 text-green-800',
};

const statusLabels = {
  pending: 'Pending Review',
  reviewing: 'Under Review',
  disputed: 'Dispute Filed',
  resolved: 'Resolved',
};

const BillSummary = ({
  provider,
  date,
  totalAmount,
  estimatedOvercharge,
  status,
  onClick,
}: BillSummaryProps) => {
  const fairPrice = totalAmount - estimatedOvercharge;
  
  return (
    <div
      className="layered-card p-4 mb-4 animate-enter"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between mb-2">
        <div>
          <h3 className="font-semibold text-lg">{provider}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-sm">Billed Amount</span>
          <span className="font-semibold">${totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Fair Price Estimate</span>
          <span className="font-semibold text-green-600">${fairPrice}</span>
        </div>
      </div>
      
      <ProgressBar value={fairPrice} max={totalAmount} />
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <div className="bg-red-100 px-2 py-1 rounded text-red-600 text-sm font-medium">
            Potential savings: ${estimatedOvercharge}
          </div>
        </div>
        <button className="text-primary-blue hover:bg-primary-light p-2 rounded-full transition-colors">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BillSummary;
