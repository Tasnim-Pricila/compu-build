import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: '',
};

const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    }
  },
});

export const { setCategory } = componentSlice.actions
export default componentSlice.reducer;