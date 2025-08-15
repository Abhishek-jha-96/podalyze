import { useAppSelector } from "~/store/hooks";
import AnalyticCard from "../cell/AnalyticCard";
import NoContent from "../cell/NoContent";
import { AddModal } from "./AddModal";

export default function AnalyticDashboard() {
  const projects = useAppSelector((state) => state.project.projects);

  return (
    <div className="flex flex-col pt-4">
      <div className="flex justify-end px-5">
        <AddModal />
      </div>
      <div>
        <div className="flex justify-center items-center pt-10">
          {projects.length === 0 ? (
          <div className="flex justify-center items-center">
            <NoContent />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((proj, index) => (
              <AnalyticCard
                key={index}
                title={proj.title}
                genre={"Unknown"}
                sentiment={"Unknown"}
                avg_time={0}
              />
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
