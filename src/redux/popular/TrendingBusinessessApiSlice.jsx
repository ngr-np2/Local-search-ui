import { apiSlice } from "../app/api";

export const BusinessApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBusiness: builder.query({
      query: () => "/business/trending",
      keepUnusedDataFor: 360,
    }),
  }),
});
export const { useGetBusinessQuery } = BusinessApiSlice;
