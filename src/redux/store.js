import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./features/components/componentSlice"
import pcBuildReducer from "./features/pcBuild/pcBuildSlice"
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    component: componentReducer,
    pcBuild: pcBuildReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

export default store;
