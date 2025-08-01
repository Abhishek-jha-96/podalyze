import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string; user: any },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/email/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<
      { message: string },
      { email: string; password: string }
    >({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    getUser: builder.query<any, void>({
      query: () => "/me",
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } =
  authApi;
