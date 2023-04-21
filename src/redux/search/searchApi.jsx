import { apiSlice } from "../app/api";
export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: ({ search, page, limit }) =>
        //  page && limit
        // ? `/business?search=${search}&page=${page}&limit=${limit}`
        // : page
        // ? `/business?search=${search}&page=${page}`
        // : limit ? `/business?search=${search}&limit=${limit}`
        // : search
        // &&
        `/business?search=${search}&page=${page}&limit=${limit}`,
      keepUnusedDataFor: 20,
    }),
  }),
});
export const { useGetSearchQuery } = searchApiSlice;
