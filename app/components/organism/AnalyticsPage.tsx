import { useAppDispatch } from "~/store/hooks";
import AnalyticDashboard from "../molecule/AnalyticDashboard";
import AnalyticNavbar from "../molecule/AnalyticNavbar";
import { projectAPI } from "~/store/features/projects/projectAPI";
import { useEffect } from "react";
import { addMultipleProjects, clearProjects } from "~/store/features/projects/projectSlice";

export default function AnalyticsPage() {
    const dispatch = useAppDispatch();
  
    const { data: projectData, isLoading } = projectAPI.useFetchProjectsQuery();
  
    useEffect(() => {
      if (projectData) {
        dispatch(clearProjects());
        dispatch(addMultipleProjects(projectData));
      }
    }, [projectData, dispatch]);
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full">
        <AnalyticNavbar />
      </div>
      <div className="w-full">
        <AnalyticDashboard />
      </div>
    </div>
  );
}
