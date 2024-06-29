

// MoodTrends.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const moodMapping = {
  Happy: 3,
  Calm: 2,
  Anxious: 1,
  Sad: 0
};

const moodDescriptions = {
  3: 'Happy',
  2: 'Calm',
  1: 'Anxious',
  0: 'Sad'
};

const MoodTrends = () => {
  const moods = useSelector((state) => state.mood.items);
  const theme = useSelector((state) => state.theme.theme);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredMoods = moods.filter(mood => {
    const moodDate = new Date(mood.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (startDate === '' || moodDate >= start) && (endDate === '' || moodDate <= end);
  });

  const moodTrendData = {
    labels: filteredMoods.map((mood) => mood.date),
    datasets: [
      {
        label: 'Mood Trends',
        data: filteredMoods.map((mood) => moodMapping[mood.mood]),
        fill: false,
        backgroundColor: '#14B8A6', 
        borderColor: '#14B8A6', 
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          callback: function(value) {
            return moodDescriptions[value];
          },
        },
        title: {
          display: true,
          text: 'Mood Level',
        },
        min: 0,
        max: 3,
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Mood Trends Over Time',
      },
    },
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-teal-50 text-gray-900'}`}>
      <h3 className="text-xl font-semibold mb-4 text-center">Trends</h3>
      <div className="flex justify-center mb-4">
        <div className="mr-4">
          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={`p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
          />
        </div>
        <div>
          <label className="block mb-2">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={`p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
          />
        </div>
      </div>
      <div className="relative h-96">
        <Line data={moodTrendData} options={options} />
      </div>
    </div>
  );
};

export default MoodTrends;
