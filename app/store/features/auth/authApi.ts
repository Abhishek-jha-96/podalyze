import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/store/baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
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
        url: "/auth/email/register",
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
