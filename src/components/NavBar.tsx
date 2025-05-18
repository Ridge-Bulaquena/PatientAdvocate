
import React from 'react';
import { Home, File, Search, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-t-3xl py-2 px-6">
      <div className="flex justify-around items-center">
        <NavItem to="/" icon={<Home size={24} />} label="Home" />
        <NavItem to="/bills" icon={<File size={24} />} label="My Bills" />
        <NavItem to="/compare" icon={<Search size={24} />} label="Compare" />
        <NavItem to="/profile" icon={<User size={24} />} label="Profile" />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex flex-col items-center ${isActive ? 'text-primary-blue' : 'text-gray-400'}`
      }
    >
      <div className="p-2">
        {icon}
      </div>
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};

export default NavBar;
