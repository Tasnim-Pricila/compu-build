import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./features/components/componentSlice"
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    component: componentReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

export default store;
