import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import tasksReducer from '../hw_7/tasksSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    tasks: tasksReducer,
  },
});

export default store;
