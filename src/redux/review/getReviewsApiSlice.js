import { apiSlice } from "../app/api";

export const getReviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: ({ dataId }) => `/review/${dataId}`,
      keepUnusedDataFor: 3,
    }),
  }),
});
export const { useGetReviewQuery } = getReviewApiSlice;
