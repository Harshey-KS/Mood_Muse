// slices/moodSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   items: [],
//   status: 'idle',
//   error: null,
// };

// export const fetchMoods = createAsyncThunk('mood/fetchMoods', async () => {
//   const response = await axios.get('/api/moods');
//   return response.data;
// });

// export const addMood = createAsyncThunk('mood/addMood', async (newMood) => {
//   const response = await axios.post('/api/moods', newMood);
//   return response.data;
// });

// const moodSlice = createSlice({
//   name: 'mood',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMoods.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMoods.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchMoods.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addMood.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//   },
// });

// export default moodSlice.reducer;


// slices/moodSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchMoods = createAsyncThunk('mood/fetchMoods', async () => {
  const response = await axios.get('/api/moods');
  return response.data;
});

export const addMood = createAsyncThunk('mood/addMood', async (newMood) => {
  const response = await axios.post('/api/moods', newMood);
  return response.data;
});

export const deleteMood = createAsyncThunk('mood/deleteMood', async (id) => {
  await axios.delete(`/api/moods/${id}`);
  return id;
});

export const updateMood = createAsyncThunk('mood/updateMood', async (updatedMood) => {
  const response = await axios.put(`/api/moods/${updatedMood.id}`, updatedMood);
  return response.data;
});

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoods.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoods.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addMood.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteMood.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
      })
      .addCase(updateMood.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default moodSlice.reducer;
