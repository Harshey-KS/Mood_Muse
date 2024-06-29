// MoodCalendar.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoods, deleteMood, updateMood } from '../redux/slices/moodSlice';
import './css/CustomCalendar.css';

const getISODate = (date) => {
  const tzoffset = date.getTimezoneOffset() * 60000;
  return new Date(date - tzoffset).toISOString().split('T')[0];
};

const MoodCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [currentMood, setCurrentMood] = useState({ mood: '', note: '', date: '', id: null });
  const moods = useSelector((state) => state.mood.items);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoods());
  }, [dispatch]);

  const moodsOnSelectedDate = moods.filter(
    (mood) => mood.date === getISODate(selectedDate)
  );

  const handleEdit = (mood) => {
    setCurrentMood(mood);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteMood(id));
  };

  const handleUpdate = () => {
    dispatch(updateMood(currentMood));
    setIsEditing(false);
    setCurrentMood({ mood: '', note: '', id: null });
  };

  const moodColors = {
    Happy: 'text-yellow-200',
    Sad: 'text-blue-500',
    Calm: 'text-green-500',
    Anxious: 'text-red-500'
  };
  
  function MoodColor({ mood }) {
    const moodColorClass = moodColors[mood.mood] || 'text-gray-500'; 
  
    return (
      <span className={`font-semibold ${moodColorClass}`}>{mood.mood}</span>
    );
  }

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-teal-50 text-gray-900'}`}>
      <div className="flex flex-col md:flex-row">
        <div className="mb-6 md:mb-0 md:mr-6">
          <Calendar
            className="mx-auto custom-calendar rounded-lg"
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date, view }) => {
            if (view === 'month' && date.toDateString() === selectedDate.toDateString()) {
              return 'bg-teal-500 text-white rounded-full';
            } else if (view === 'month' && date.toDateString() === new Date().toDateString()) {
              return 'bg-teal-300 text-white rounded-full'; 
            }
            return null;
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-center">{selectedDate.toDateString()}</h3>
          {moodsOnSelectedDate.length > 0 ? (
            moodsOnSelectedDate.map((mood, index) => (
              <div key={index} className="mb-2 flex items-center justify-between">
                <div>
                  <span>Felt </span>
                  <MoodColor mood={mood} />
                  <p className="text-gray-600">{mood.note}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No moods logged for this date.</p>
          )}
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-teal-50 text-gray-900'}`}>
            <h3 className="text-xl font-semibold mb-4">Edit Mood</h3>
            <div className="mb-4">
              <select
                className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                value={currentMood.mood}
                onChange={(e) => setCurrentMood({ ...currentMood, mood: e.target.value })}
              >
                <option value="">Select Mood</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Anxious">Anxious</option>
                <option value="Calm">Calm</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                value={currentMood.note}
                onChange={(e) => setCurrentMood({ ...currentMood, note: e.target.value })}
                placeholder="Add a note"
              ></textarea>
            </div>
            <button
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              onClick={handleUpdate}
            >
              Update Mood
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodCalendar;
