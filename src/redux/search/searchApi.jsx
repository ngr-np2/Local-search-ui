import { apiSlice } from "../app/api";
export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: ({ id, search, page, limit, query }) =>
        //  page && limit
        // ? `/business?search=${search}&page=${page}&limit=${limit}`
        // : page
        // ? `/business?search=${search}&page=${page}`
        // : limit ? `/business?search=${search}&limit=${limit}`
        // : search
        // &&
        query
          ? `/business${query}&search=${search}`
          : id
          ? `/business/${search}/${id}?page=${page}&limit=${limit}`
          : `/business?search=${search}&page=${page}&limit=${limit}`,
      keepUnusedDataFor: 20,
    }),
  }),
});
export const { useGetSearchQuery } = searchApiSlice;
