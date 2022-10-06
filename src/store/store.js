import { configureStore } from "@reduxjs/toolkit";
import groundSlice from "./reducers/groundSlice";

const store = configureStore({
  reducer: {
    ground: groundSlice.reducer,
  },
});

export default store;
