import { LayoutGrid, ListFilter } from "lucide-react";
import { useState } from "react";
import type {
  AnalyticCardStatus,
  AnalyticViewMode,
  Project,
  Task,
} from "~/constants/interfaces";
import {
  cn,
  formatWatchTime,
  getYoutubeThumbnail,
  sentimentToTone,
} from "~/lib/utils";
import { useAppSelector } from "~/store/hooks";
import AnalyticCard from "../cell/AnalyticCard";
import NoContent from "../cell/NoContent";

function getLatestTask(project: Project): Task | undefined {
  if (!project.tasks?.length) return undefined;

  return [...project.tasks].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  )[0];
}

function mapTaskStatusToCardStatus(
  taskStatus: Task["status"] | undefined,
): AnalyticCardStatus {
  if (taskStatus === "active") return "Completed";
  if (taskStatus === "inactive") return "Failed";
  return "Pending";
}

export default function AnalyticDashboard() {
  const projects = useAppSelector((state) => state.project.projects);
  const [viewMode, setViewMode] = useState<AnalyticViewMode>("list");

  return (
    <section className="flex w-full flex-1 flex-col p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex w-full flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl leading-8 text-[#1A1B22]">Your Podcasts</h2>
          </div>

          <div className="flex items-start gap-2">
            <button
              type="button"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              onClick={() => setViewMode("list")}
              className={cn(
                "rounded-lg p-2 transition-colors",
                viewMode === "list"
                  ? "bg-[#F4F2FD] text-[#B02713]"
                  : "text-[#5F5E5E] hover:bg-[#F4F2FD]",
              )}
            >
              <ListFilter className="size-[18px]" />
            </button>
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
              className={cn(
                "rounded-lg p-2 transition-colors",
                viewMode === "grid"
                  ? "bg-[#F4F2FD] text-[#B02713]"
                  : "text-[#5F5E5E] hover:bg-[#F4F2FD]",
              )}
            >
              <LayoutGrid className="size-[18px]" />
            </button>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="flex justify-center py-10">
            <NoContent />
          </div>
        ) : (
          <>
            <div
              className={cn(
                viewMode === "list"
                  ? "flex flex-col gap-4"
                  : "grid grid-cols-1 gap-4 lg:grid-cols-2",
              )}
            >
              {projects.map((project, index) => {
                const task = getLatestTask(project);
                const taskStatus = task?.status ?? "pending";
                const cardStatus = mapTaskStatusToCardStatus(task?.status);
                const sentimentTone = sentimentToTone(task?.sentiment);

                return (
                  <AnalyticCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    url={project.url}
                    updatedAt={task?.updatedAt ?? project.updatedAt}
                    status={cardStatus}
                    taskStatus={taskStatus}
                    sentiment={task?.sentiment ?? "Pending"}
                    sentimentTone={sentimentTone}
                    avgTime={formatWatchTime(task?.watchTime ?? 0)}
                    metaData={task?.metaData}
                    thumbnail={getYoutubeThumbnail(project.url, index)}
                    compact={viewMode === "grid"}
                  />
                );
              })}
            </div>
            <div className="flex flex-col items-center gap-4 border-t border-[#EEEDf7] pt-16 pb-12"></div>
          </>
        )}
      </div>
    </section>
  );
}
