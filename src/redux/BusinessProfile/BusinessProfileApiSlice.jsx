import { apiSlice } from "../app/api";

export const businessProfileSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBusinessProfile: builder.query({
      query: ({ id }) => `/business/${id}`,
      keepUnusedDataFor: 10,
    }),
  }),
});
export const { useGetBusinessProfileQuery } = businessProfileSlice;
