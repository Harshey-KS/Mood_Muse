import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMood, fetchMoods } from '../redux/slices/moodSlice';

const LogMood = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [currentMood, setCurrentMood] = useState('');
  const [note, setNote] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Initializing with today's date

  const handleAddMood = async () => {
    const newMood = {
      mood: currentMood,
      note,
      date: selectedDate, // Using the selected date
    };
    console.log('Adding new mood:', newMood); // Debugging statement
    await dispatch(addMood(newMood));
    dispatch(fetchMoods());
    setCurrentMood('');
    setNote('');
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-teal-50 text-gray-900'}`}>
      <h3 className="text-xl font-semibold mb-4 text-center">Log Mood</h3>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Select Date</label>
        <input
          type="date"
          className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Select Mood</label>
        <select
          className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
          value={currentMood}
          onChange={(e) => setCurrentMood(e.target.value)}
        >
          <option value="">Select Mood</option>
          <option value="Happy" className='text-yellow-300'>Happy</option>
          <option value="Sad" className='text-blue-500'>Sad</option>
          <option value="Anxious" className='text-red-500'>Anxious</option>
          <option value="Calm" className='text-green-500'>Calm</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Add a Note</label>
        <textarea
          className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note"
        ></textarea>
      </div>
      <button
        className="w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600"
        onClick={handleAddMood}
      >
        Add Mood
      </button>
    </div>
  );
};

export default LogMood;

// // LogMood.jsx
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addMood, fetchMoods } from '../redux/slices/moodSlice';

// const LogMood = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector((state) => state.theme.theme);
//   const [currentMood, setCurrentMood] = useState('');
//   const [note, setNote] = useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

//   const handleAddMood = async () => {
//     const newMood = {
//       mood: currentMood,
//       note,
//       date: selectedDate,
//     };
//     await dispatch(addMood(newMood));
//     dispatch(fetchMoods());
//     setCurrentMood('');
//     setNote('');
//   };

//   return (
//     <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-50 text-gray-900'}`}>
//       <h3 className="text-xl font-semibold mb-4">Log Today's Mood</h3>
//       <div className="mb-4">
//         <label className="block mb-2">Select Date</label>
//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//           className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Select Mood</label>
//         <select
//           className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
//           value={currentMood}
//           onChange={(e) => setCurrentMood(e.target.value)}
//         >
//           <option value="">Select Mood</option>
//           <option value="Happy">Happy</option>
//           <option value="Sad">Sad</option>
//           <option value="Anxious">Anxious</option>
//           <option value="Calm">Calm</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Add a Note</label>
//         <textarea
//           className={`w-full p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//           placeholder="Add a note"
//         ></textarea>
//       </div>
//       <button
//         className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//         onClick={handleAddMood}
//       >
//         Add Mood
//       </button>
//     </div>
//   );
// };

// export default LogMood;
