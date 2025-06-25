
import React from 'react';
import { Settings } from 'lucide-react';

const CourseCard = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-6xl font-bold text-gray-900 mb-2">23+</div>
          <div className="text-lg text-gray-600 font-medium">Courses Assigned</div>
        </div>
        <div className="bg-gray-100 p-3 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors">
          <Settings size={20} className="text-gray-600" />
        </div>
      </div>

      {/* Today's Lesson Card */}
      <div className="bg-dark-300 text-white p-6 rounded-2xl mb-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">COURSE</div>
          <div className="text-xl font-semibold mb-4">Today's Lesson</div>
          
          <div className="flex items-center justify-between">
            <div className="bg-green-500 text-dark-300 px-3 py-1 rounded-lg text-sm font-medium">
              10 Min
            </div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Avatars and Description */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex -space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face" 
            alt="User 1" 
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" 
            alt="User 2" 
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>
      
      <div className="text-sm text-gray-600 leading-relaxed">
        Monitor active learning modules assigned to this group.
      </div>
    </div>
  );
};

export default CourseCard;
