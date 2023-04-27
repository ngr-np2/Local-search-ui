import { apiSlice } from "../app/api";

export const CountDocApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTotalDoc: builder.query({
      query: (type) => `/count/${type}`,
      keepUnusedDataFor: 360,
    }),
  }),
});
export const { useGetTotalDocQuery } = CountDocApiSlice;
