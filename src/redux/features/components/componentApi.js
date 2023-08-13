import { api } from "@/redux/api/apiSlice";

const componentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    editComponent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/component/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useEditComponentMutation } = componentApi;
