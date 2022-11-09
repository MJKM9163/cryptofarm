import { createSlice, current } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState: {
    bag: false,
  },
  reducers: {
    // null
    bagToggle: (state, action) => {
      state.bag = !state.bag;
    },
  },
});

export default toggleSlice;
export const { bagToggle } = toggleSlice.actions;
