import { apiSlice } from "../app/api";
export const HighBudgetAdsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHighBudgetAds: builder.query({
      query: () => "/ads/businessProfile",
      keepUnusedDataFor: 20,
    }),
  }),
});
export const { useGetHighBudgetAdsQuery } = HighBudgetAdsApiSlice;
