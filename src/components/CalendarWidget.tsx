
import React from 'react';

const CalendarWidget = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [8, 9, '', '', 12, 13, 14];
  const eventDays = [9, 10]; // Days with events

  return (
    <div className="bg-dark-200 text-white p-6 rounded-3xl max-w-sm">
      {/* Date Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-6xl font-bold text-orange-500 mb-1">12</div>
          <div className="text-lg text-gray-300">
            <div>Wednesday</div>
            <div className="text-sm text-gray-400">July 2025</div>
          </div>
        </div>
        <div className="bg-gray-700 px-4 py-2 rounded-full">
          <span className="text-sm">Available</span>
        </div>
      </div>

      {/* Events */}
      <div className="mb-6">
        <div className="text-lg font-semibold mb-2">3 Ongoing Event</div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div key={day} className="text-center text-xs text-gray-400 py-2">
            {day}
          </div>
        ))}
        
        {dates.map((date, index) => (
          <div
            key={index}
            className={`text-center py-2 text-sm relative ${
              date === 12
                ? 'bg-white text-dark-200 rounded-lg font-semibold'
                : date && typeof date === 'number' && eventDays.includes(date)
                ? 'text-orange-500 font-semibold'
                : 'text-gray-300'
            }`}
          >
            {date}
            {typeof date === 'number' && eventDays.includes(date) && date !== 12 && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
