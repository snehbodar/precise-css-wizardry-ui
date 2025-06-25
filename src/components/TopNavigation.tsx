
import React from 'react';
import { ChevronDown, Bell, Settings, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopNavigation = () => {
  return (
    <nav className="bg-dark-200 text-white px-6 py-3 rounded-full mx-4 mt-4 shadow-medium">
      <div className="flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors">
            <span className="text-sm font-medium">Overview</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors">
            <span className="text-sm font-medium">Learning Reports</span>
          </div>
          
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors">
            <span className="text-sm font-medium">Course Manager</span>
          </div>
          
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors">
            <span className="text-sm font-medium">Preferences</span>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
            <MessageSquare size={18} />
          </Button>
          
          <div className="relative">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
              <Bell size={18} />
            </Button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-dark-200"></div>
          </div>
          
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700 bg-orange-500 hover:bg-orange-600">
            <Settings size={18} />
          </Button>
          
          <div className="flex items-center space-x-3 ml-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                alt="Jimmy" 
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">Hey, Jimmy</div>
              <div className="text-xs text-gray-400">jamie.jimmy@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
