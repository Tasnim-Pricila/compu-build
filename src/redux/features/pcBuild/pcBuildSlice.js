import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Processor: {},
  RAM: {},
  Motherboard: {},
  PowerSupplyUnit: {},
  StorageDevice: {},
  Monitor: {},
};

const pcBuildSlice = createSlice({
  name: "pcBuild",
  initialState,
  reducers: {
    setProcessor: (state, action) => {
      // console.log(action.payload);
      const category = action.payload.category.split(" ").join("")
      console.log(category);
      state[category] = action.payload;
    },
  },
});

export const { setProcessor } = pcBuildSlice.actions;
export default pcBuildSlice.reducer;
