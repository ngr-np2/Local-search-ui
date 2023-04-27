
import { apiSlice } from "../app/api";

export const CatgApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatg: builder.query({
      query: () => "/catg/popular",
      keepUnusedDataFor: 10,
    }),
  }),
});
export const { useGetCatgQuery } = CatgApiSlice;
