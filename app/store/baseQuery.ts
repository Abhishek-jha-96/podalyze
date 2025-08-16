import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

// Authenticated
export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// Public (no token)
export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
