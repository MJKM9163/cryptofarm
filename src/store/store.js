import { configureStore } from "@reduxjs/toolkit";
import groundSlice from "./reducers/groundSlice";
import toggleSlice from "./reducers/toggleSlice";

const store = configureStore({
  reducer: {
    ground: groundSlice.reducer,
    toggle: toggleSlice.reducer,
  },
});

export default store;
