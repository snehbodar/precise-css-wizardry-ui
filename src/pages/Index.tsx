
import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import Sidebar from '@/components/Sidebar';
import CourseCard from '@/components/CourseCard';
import TimeSpentCard from '@/components/TimeSpentCard';
import CalendarWidget from '@/components/CalendarWidget';
import CircularProgress from '@/components/CircularProgress';
import MediaPlayer from '@/components/MediaPlayer';
import SubmitButton from '@/components/SubmitButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <TopNavigation />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-12 gap-6 max-w-7xl">
            {/* Course Card - spans 4 columns */}
            <div className="col-span-4">
              <CourseCard />
            </div>
            
            {/* Time Spent Card - spans 3 columns */}
            <div className="col-span-3">
              <TimeSpentCard />
            </div>
            
            {/* Submit Button - spans 2 columns */}
            <div className="col-span-2 flex items-start pt-8">
              <SubmitButton />
            </div>
            
            {/* Circular Progress - spans 3 columns */}
            <div className="col-span-3">
              <CircularProgress />
            </div>
            
            {/* Calendar Widget - spans 4 columns */}
            <div className="col-span-4">
              <CalendarWidget />
            </div>
            
            {/* Media Player - spans 5 columns */}
            <div className="col-span-5">
              <MediaPlayer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
