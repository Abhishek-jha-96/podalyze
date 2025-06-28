import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "~/components/molecule/spinnerLoader";
import AnalyticsPage from "~/components/organism/AnalyticsPage";
import { useAppSelector } from "~/store/hooks";

export default function Analytics() {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
  //   if (ready && user === null) {
  //     navigate("/login");
  //   }
  // }, [ready, user, navigate]);

  if (!ready) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    );
  }

  return <div><AnalyticsPage /></div>;
}
