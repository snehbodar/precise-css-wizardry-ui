
import React from 'react';
import { Play, Plus, X } from 'lucide-react';

const MediaPlayer = () => {
  return (
    <div className="space-y-4">
      {/* Current Playback Card */}
      <div className="bg-dark-200 text-white p-6 rounded-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-gray-400 uppercase tracking-wide">CURRENT PLAYBACK</div>
          <Plus size={16} className="text-gray-400" />
        </div>
        
        <div className="flex space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center" 
            alt="Course thumbnail" 
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">UI Design Fundamentals</h3>
            <div className="bg-green-500 text-dark-200 px-3 py-1 rounded-lg text-sm font-medium inline-block">
              Week 2
            </div>
          </div>
        </div>
      </div>

      {/* File Manager Card */}
      <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-dark-200 text-white p-2 rounded-xl">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <span className="text-sm text-gray-600">Mon</span>
            <span className="text-sm font-semibold">10</span>
            <X size={16} className="text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-gray-100 p-2 rounded-xl">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
          </div>
          <span className="text-sm font-medium text-gray-900">32 Files</span>
        </div>
      </div>

      {/* Audio Player */}
      <div className="bg-dark-300 text-white p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm">32 F</div>
            <button className="bg-white text-dark-300 p-2 rounded-full">
              <Play size={16} fill="currentColor" />
            </button>
          </div>
          
          <div className="flex-1 mx-4">
            <div className="h-1 bg-gray-600 rounded-full">
              <div className="h-1 bg-orange-500 rounded-full w-1/3"></div>
            </div>
          </div>
          
          <div className="text-sm">01:03:43</div>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
