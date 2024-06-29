// MoodTracker.jsx
import React from 'react';
import LogMood from './LogMood';
import MoodTrends from './MoodTrends';
import MoodCalendar from './MoodCalendar';

const MoodTracker = () => {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      
      <div className="mb-6 ">
        <MoodCalendar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LogMood />
        <MoodTrends />
      </div>
    </div>
  );
};

export default MoodTracker;

