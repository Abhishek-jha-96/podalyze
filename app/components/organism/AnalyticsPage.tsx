import { useEffect, useState } from "react";
import type { AnalyticNavItem } from "~/constants/interfaces";
import {
  addMultipleProjects,
  clearProjects,
} from "~/store/features/projects/projectSlice";
import { projectAPI } from "~/store/features/projects/projectAPI";
import { useAppDispatch } from "~/store/hooks";
import AnalyticDashboard from "../molecule/AnalyticDashboard";
import AnalyticHeader from "../molecule/AnalyticHeader";
import AnalyticNavbar from "../molecule/AnalyticNavbar";
import { Spinner } from "../molecule/spinnerLoader";

export default function AnalyticsPage() {
  const dispatch = useAppDispatch();
  const { data: projectData, isLoading } = projectAPI.useFetchProjectsQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState<AnalyticNavItem>("dashboard");

  useEffect(() => {
    if (projectData) {
      dispatch(clearProjects());
      dispatch(addMultipleProjects(projectData));
    }
  }, [projectData, dispatch]);

  return (
    <div className="flex min-h-screen w-full bg-white">
      <AnalyticNavbar activeNav={activeNav} onNavChange={setActiveNav} />

      <main className="flex min-h-screen w-[80%] flex-1 flex-col bg-[#FBF8FF]">
        <AnalyticHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {isLoading ? (
          <div className="flex flex-1 items-center justify-center">
            <Spinner />
          </div>
        ) : activeNav === "dashboard" ? (
          <AnalyticDashboard searchQuery={searchQuery} />
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 p-8 text-center">
            <h2 className="text-2xl text-[#1A1B22] capitalize">{activeNav}</h2>
            <p className="text-sm text-[#5F5E5E]">
              This section is coming soon.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
