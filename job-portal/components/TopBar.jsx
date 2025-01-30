import React from 'react';
import { Bell, Settings } from 'lucide-react';
import logo from '../assets/logo.jpg';
import prof from '../assets/prof.jpg';

const TopBar = () => {
  return (
    <body style={{ backgroundColor: "#e2e0fb", padding: "10px" }}>
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-96">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg">
              <img src={logo} alt="Logo" />
            </div>
            <span className="font-semibold text-lg">Talantium</span>
          </div>
          <nav className="flex gap-8">
            <a href="#" className="text-gray-500 text-sm ">Home</a>
            <a href="#" className="text-gray-500 text-sm relative">
              Messages
              <span className="absolute top-0.5 -right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </a>
            <a href="#" className="text-gray-500 text-sm">About us</a>
            <a href="#" className="text-gray-900 px-4 text-sm border -mx-2 border-black rounded-full">Jobs</a>
            <a href="#" className="text-gray-500 text-sm">Community</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </div>

          
          <div className="relative w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </div>

          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={prof} className="w-full h-full object-cover" alt="Profile" />
          </div>
        </div>
      </div>
    </body>
  );
};

export default TopBar;
