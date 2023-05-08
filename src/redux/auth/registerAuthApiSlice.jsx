import { apiSlice } from "../app/api";

export const registerAuthApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerAuthApiSlice;







































