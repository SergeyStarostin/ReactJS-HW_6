import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    toggleAvailability: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        state[index].available = !state[index].available;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productSlice.actions;
export default productSlice.reducer;
