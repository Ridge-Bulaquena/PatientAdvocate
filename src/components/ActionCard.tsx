
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  to: string;
  color?: string;
}

const ActionCard = ({ icon, title, description, to, color = "bg-primary-light" }: ActionCardProps) => {
  return (
    <Link to={to} className="block w-full animate-enter">
      <div className="action-card group h-full">
        <div className={`${color} w-12 h-12 flex items-center justify-center rounded-xl mb-3`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ActionCard;
