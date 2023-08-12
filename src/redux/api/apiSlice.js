import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://compu-build-server.vercel.app/api/v1",
  }),

  endpoints: () => ({}),
});
