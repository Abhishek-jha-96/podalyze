import { LayoutGrid, ListFilter } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type {
  AnalyticViewMode,
  Project,
  SentimentTone,
} from "~/constants/interfaces";
import {
  cn,
  formatWatchTime,
  getSentimentMeta,
  getYoutubeThumbnail,
} from "~/lib/utils";
import { useAppSelector } from "~/store/hooks";
import AnalyticCard from "../cell/AnalyticCard";
import NoContent from "../cell/NoContent";

const PAGE_SIZE = 12;

function deriveProjectStatus(
  project: Project
): "active" | "inactive" | "pending" {
  const statuses = project.tasks?.map((task) => task.status) ?? [];
  if (statuses.includes("active")) return "active";
  if (statuses.includes("pending")) return "pending";
  if (statuses.includes("inactive")) return "inactive";
  return "pending";
}

function deriveSentimentTone(status: Project["tasks"]): SentimentTone {
  const latest = status?.[0]?.status;
  if (latest === "active") return "highly-positive";
  if (latest === "inactive") return "positive";
  if (latest === "pending") return "neutral";
  return "pending";
}

interface AnalyticDashboardProps {
  searchQuery: string;
}

export default function AnalyticDashboard({
  searchQuery,
}: AnalyticDashboardProps) {
  const projects = useAppSelector((state) => state.project.projects);
  const [viewMode, setViewMode] = useState<AnalyticViewMode>("list");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery]);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return projects;
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.url.toLowerCase().includes(query)
    );
  }, [projects, searchQuery]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section className="flex w-full flex-1 flex-col p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex w-full flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl leading-8 text-[#1A1B22]">Your Podcasts</h2>
            <p className="text-sm leading-5 text-[#5F5E5E]">
              Managing {projects.length} active channel
              {projects.length === 1 ? "" : "s"}
            </p>
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
                  : "text-[#5F5E5E] hover:bg-[#F4F2FD]"
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
                  : "text-[#5F5E5E] hover:bg-[#F4F2FD]"
              )}
            >
              <LayoutGrid className="size-[18px]" />
            </button>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="flex justify-center py-10">
            <NoContent />
          </div>
        ) : (
          <>
            <div
              className={cn(
                viewMode === "list"
                  ? "flex flex-col gap-4"
                  : "grid grid-cols-1 gap-4 lg:grid-cols-2"
              )}
            >
              {visibleProjects.map((project, index) => {
                const status = deriveProjectStatus(project);
                const sentimentTone = deriveSentimentTone(project.tasks);
                const sentimentMeta = getSentimentMeta(sentimentTone);

                return (
                  <AnalyticCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    url={project.url}
                    updatedAt={project.updatedAt}
                    status={status}
                    sentiment={sentimentMeta.label}
                    sentimentTone={sentimentTone}
                    avgTime={formatWatchTime(0)}
                    thumbnail={getYoutubeThumbnail(project.url, index)}
                    compact={viewMode === "grid"}
                  />
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-4 border-t border-[#EEEDf7] pt-16 pb-12">
              <p className="text-center text-sm leading-5 text-[#5F5E5E]">
                Viewing recent {visibleProjects.length} episode
                {visibleProjects.length === 1 ? "" : "s"}
                {hasMore ? ". More available in archives." : "."}
              </p>
              {hasMore && (
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((count) => count + PAGE_SIZE)
                  }
                  className="rounded-full border border-[#E2BEB8] px-8 py-2 text-base font-bold leading-6 text-[#B02713] transition-colors hover:bg-[#F4F2FD]"
                >
                  Load Data Archive
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
