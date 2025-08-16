import { useEffect, useState } from "react";
import { useAppDispatch } from "~/store/hooks";
import { logout, setCredentials } from "~/store/features/auth/authSlice";
import { authApi } from "~/store/features/auth/authApi";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (token && refresh) {
      dispatch(setCredentials({user: null, token: token, refresh: refresh }));

      // Fetch /me and update user
      dispatch(authApi.endpoints.getUser.initiate())
        .unwrap()
        .then((user) => {
          dispatch(setCredentials({ user, token, refresh }));
        })
        .catch(() => {
          localStorage.removeItem("access");
          dispatch(logout());
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span>Loading...</span>
      </div>
    );
  }

  return <>{children}</>;
}
