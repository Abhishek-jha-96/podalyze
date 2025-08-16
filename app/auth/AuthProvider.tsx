import { useEffect, useState } from "react";
import { authApi } from "~/store/features/auth/authApi";
import { logout, setCredentials } from "~/store/features/auth/authSlice";
import { useAppDispatch } from "~/store/hooks";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (token && refresh) {
      // Set temporary credentials
      dispatch(setCredentials({ user: null, token, refresh }));

      // Try fetching user
      dispatch(authApi.endpoints.getUser.initiate())
        .unwrap()
        .then((user) => {
          dispatch(setCredentials({ user, token, refresh }));
        })
        .catch(async () => {
          // Try refreshing token
          try {
            const refreshResult = await dispatch(
              authApi.endpoints.refresh.initiate({ refreshToken: refresh })
            ).unwrap();

            if (refreshResult?.token) {
              localStorage.setItem("access", refreshResult.token);
              // If refresh API also returns a new refresh token, save it
              if (refreshResult.refreshToken) {
                localStorage.setItem("refresh", refreshResult.refreshToken);
              }

              // Retry fetching user with new token
              const user = await dispatch(
                authApi.endpoints.getUser.initiate()
              ).unwrap();

              dispatch(
                setCredentials({
                  user,
                  token: refreshResult.token,
                  refresh: refreshResult.refreshToken || refresh,
                })
              );
            } else {
              throw new Error("Invalid refresh response");
            }
          } catch (err) {
            // Refresh failed -> logout
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            dispatch(logout());
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
}