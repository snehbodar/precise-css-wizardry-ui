
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const menuItems = [
    { label: 'Marketing Bootcamp', active: true },
    { label: 'Dev Team Onboarding', active: false },
    { label: 'Product Leadership', active: false },
    { label: 'Creative Interns', active: false },
  ];

  return (
    <div className="bg-dark-200 text-white w-72 min-h-screen p-6 rounded-r-3xl">
      <div className="space-y-6">
        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                item.active 
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* View Group Button */}
        <div className="pt-4">
          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 flex items-center justify-center space-x-2 shadow-lg"
          >
            <span className="text-sm font-medium">View Group</span>
            <Plus size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
