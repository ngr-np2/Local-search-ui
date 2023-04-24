import { apiSlice } from "../app/api";
export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: ({ search, page, limit }) =>
        `/ads?search=${search}&page=${page}&limit=${limit}`,
      keepUnusedDataFor: 20,
    }),
  }),
});
export const { useGetSearchQuery } = searchApiSlice;
