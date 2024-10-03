import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from './tasks';

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasksData);
    }, 3000);
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
  },
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(fetchTasks.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = 'success';
      state.tasks = action.payload;
    })
    .addCase(fetchTasks.rejected, (state, action) => {
      state.status = 'failure';
      state.error = action.error.message;
    });
  },
});

export { fetchTasks };
export default tasksSlice.reducer;
