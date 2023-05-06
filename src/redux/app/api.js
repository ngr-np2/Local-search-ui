import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:8081",
  baseUrl: "https://local-search-api-production.up.railway.app",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.data?.status === 403) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);

    if (refreshResult?.data) {
      const username = api.getState().auth.username;
      api.dispatch(setCredentials({ ...refreshResult.data, username }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
      api.dispatch(
        showToastMessage({ message: "session expired!", type: "error" })
      );
    }
  }

  return result;
};
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
