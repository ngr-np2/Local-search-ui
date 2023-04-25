import { apiSlice } from "../app/api";

export const getReviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: ({ id }) => `/review/${id}`,
      keepUnusedDataFor: 10,
    }),
  }),
});
export const { useGetReviewQuery } = getReviewApiSlice;
