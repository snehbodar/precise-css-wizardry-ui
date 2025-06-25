
import React from 'react';
import { Plus } from 'lucide-react';

const CircularProgress = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex -space-x-2">
          {[
            "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`User ${index + 1}`}
              className="w-10 h-10 rounded-full border-3 border-white object-cover"
            />
          ))}
        </div>
        
        <div className="flex space-x-2">
          <div className="bg-gray-100 p-2 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
          </div>
          <div className="bg-orange-500 text-white p-2 rounded-xl cursor-pointer hover:bg-orange-600 transition-colors">
            <Plus size={16} />
          </div>
        </div>
      </div>

      {/* Circular Progress */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          {/* Background Circle */}
          <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#f3f4f6"
              strokeWidth="10"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#f97316"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(230 / 360) * 440} 440`}
              className="transition-all duration-300"
            />
            {/* Green accent */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#10b981"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20 420"
              strokeDashoffset="-300"
            />
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">230</div>
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
