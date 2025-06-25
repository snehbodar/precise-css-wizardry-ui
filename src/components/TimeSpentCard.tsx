
import React from 'react';
import { TrendingUp } from 'lucide-react';

const TimeSpentCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Time Spent</h3>
          <div className="flex items-center space-x-2">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              This Month
            </span>
          </div>
        </div>
        <div className="bg-orange-500 text-white p-2 rounded-xl">
          <TrendingUp size={20} />
        </div>
      </div>

      {/* Time Display */}
      <div className="mb-6">
        <div className="text-4xl font-bold text-gray-900 mb-2">23.04 Hr</div>
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
            +12% growth
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-24 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl flex items-end justify-center p-4">
        <div className="flex items-end space-x-1 h-full">
          {[0.3, 0.5, 0.4, 0.8, 0.6, 0.9, 0.7, 1.0, 0.6, 0.4, 0.7, 0.5].map((height, index) => (
            <div
              key={index}
              className={`w-2 rounded-t ${
                index === 7 ? 'bg-orange-500' : 'bg-orange-200'
              }`}
              style={{ height: `${height * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSpentCard;
