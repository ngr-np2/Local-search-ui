import { apiSlice } from "../app/api";

export const SearchWithIdSliceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchWithId: builder.query({
      query: ({ id, type }) => 
      // "/business/catg/643d1d9797089de23c938672",
      type === "keyword"
        ? `/business/keyword/${id}`
        : type === "category" && `/business/catg/${id}`,
      keepUnusedDataFor: 10,
    }),
  }),
});
export const { useGetSearchWithIdQuery } = SearchWithIdSliceApi;
