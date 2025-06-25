
import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SubmitButton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl text-base font-medium shadow-lg">
        Submit
      </Button>
      
      <Button variant="ghost" className="text-gray-400 hover:text-gray-600 p-3">
        <Star size={24} />
      </Button>
    </div>
  );
};

export default SubmitButton;
