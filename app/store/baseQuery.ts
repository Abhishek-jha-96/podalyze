import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";
import { authApi } from "./features/auth/authApi";
import { logout, setCredentials } from "./features/auth/authSlice";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;


export const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown, 
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  });

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // token expired.
    const refreshToken = (api.getState() as RootState).auth.refresh;

    if (!refreshToken) {
      api.dispatch(logout());
      return result;
    }

    const refreshQuery = authApi.endpoints.refresh.initiate({ refreshToken });

    const data = await api.dispatch(refreshQuery).unwrap().catch(() => null);
    if (data) {
      // save new tokens
      const cred_data = {
        user: null,
        token: data.token,
        refresh: data.refreshToken
      }
      api.dispatch(setCredentials(cred_data));

      // retry original query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
}

// Public (no token)
export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
