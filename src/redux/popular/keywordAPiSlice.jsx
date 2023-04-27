import { apiSlice } from "../app/api";

export const KeywordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getKeyword: builder.query({
      query: () => "/keyword/popular",
      keepUnusedDataFor: 10,
    }),
  }),
});
export const { useGetKeywordQuery } = KeywordApiSlice;
