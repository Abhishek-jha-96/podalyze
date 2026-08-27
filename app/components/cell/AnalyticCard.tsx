import { useState } from "react";
import { ArrowRight, Youtube } from "lucide-react";
import type { IAnalyticProps, TaskMetaData } from "~/constants/interfaces";
import {
  cn,
  formatDisplayUrl,
  formatMetaLabel,
  formatUpdatedAt,
  getSentimentMeta,
} from "~/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface AnalyticCardProps extends IAnalyticProps {
  compact?: boolean;
}

const META_FIELD_ORDER: (keyof TaskMetaData)[] = [
  "podcast_name",
  "episode_title",
  "genre",
  "episode_length",
  "pub_day",
  "pub_day_time",
  "host_popu_percentage",
  "guest_popu_percentage",
  "nums_of_ads",
];

function statusBadgeClass(status: AnalyticCardProps["status"]): string {
  if (status === "Completed") return "bg-emerald-600";
  if (status === "Failed") return "bg-[#B02713]";
  return "bg-amber-500";
}

export default function AnalyticCard({
  title,
  url,
  updatedAt,
  sentiment,
  sentimentTone,
  avgTime,
  status,
  taskStatus,
  thumbnail,
  metaData,
  compact = false,
}: AnalyticCardProps) {
  const [reportOpen, setReportOpen] = useState(false);
  const sentimentMeta = getSentimentMeta(sentimentTone);
  const hasMetaData = Boolean(metaData && Object.keys(metaData).length > 0);

  return (
    <>
      <article
        className={cn(
          "w-full rounded-xl border border-[#EEEDf7] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          compact && "h-full",
        )}
      >
        <div
          className={cn(
            "flex w-full gap-6",
            compact ? "flex-col" : "flex-col sm:flex-row sm:items-start",
          )}
        >
          <div
            className={cn(
              "relative shrink-0 overflow-hidden rounded-lg bg-[#E3E1EC]",
              compact
                ? "aspect-video w-full"
                : "aspect-video w-full sm:aspect-auto sm:min-h-[120px] sm:w-[21%] sm:min-w-[140px]",
            )}
          >
            <img src={thumbnail} alt="" className="h-full w-full object-cover" />
            <span
              className={cn(
                "absolute top-2 left-2 rounded px-2 py-1 text-[10px] font-bold leading-[15px] tracking-wide text-white uppercase",
                statusBadgeClass(status),
              )}
            >
              {status}
            </span>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <Youtube className="size-3.5 shrink-0 text-red-600" />
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate text-xs text-[#5F5E5E] hover:text-[#B02713]"
                  >
                    {formatDisplayUrl(url)}
                  </a>
                </div>
                <p className="text-[11px] leading-[16.5px] text-[#5F5E5E]">
                  {formatUpdatedAt(updatedAt)}
                </p>
              </div>

              <h3 className="text-lg leading-7 text-[#1A1B22]">{title}</h3>
            </div>

            {taskStatus === "inactive" ? (
              <div className="border-t border-[#EEEDf7] pt-4">
                <p className="text-sm font-medium text-[#B02713]">
                  Analysis failed. Please try uploading this podcast again.
                </p>
              </div>
            ) : (
              <div
                className={cn(
                  "flex flex-col gap-4 border-t border-[#EEEDf7] pt-4 sm:flex-row sm:items-start sm:gap-8",
                  taskStatus === "pending" && "pointer-events-none opacity-50",
                )}
                aria-disabled={taskStatus === "pending"}
              >
                {taskStatus === "pending" ? (
                  <p className="text-sm text-[#5F5E5E]">
                    Analysis in progress. Results will appear when the task
                    completes.
                  </p>
                ) : (
                  <>
                    <div className="flex flex-col">
                      <p className="mb-1 text-[10px] tracking-[0.5px] text-[#5F5E5E] uppercase">
                        Predicted Avg. Watch Time
                      </p>
                      <p className="flex items-baseline gap-1">
                        <span className="text-xl font-bold leading-7 text-[#1A1B22]">
                          {avgTime}
                        </span>
                        {avgTime !== "—" && (
                          <span className="text-xs text-[#5F5E5E]">mins</span>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-col pb-2">
                      <p className="mb-1 text-[10px] tracking-[0.5px] text-[#5F5E5E] uppercase">
                        Sentiment Analysis
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "size-2.5 rounded-full",
                            sentimentMeta.dotClass,
                          )}
                        />
                        <span
                          className={cn(
                            "text-sm font-bold leading-5",
                            sentimentMeta.textClass,
                          )}
                        >
                          {sentiment || sentimentMeta.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 items-center justify-end sm:pt-1">
                      <button
                        type="button"
                        disabled={!hasMetaData}
                        onClick={() => setReportOpen(true)}
                        className="flex items-center gap-2 rounded-lg border border-[#B02713]/20 bg-[#F4F2FD] px-4 py-2 text-sm font-bold text-[#B02713] transition-colors hover:bg-[#EDE9FE] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Full Report
                        <ArrowRight className="size-3" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Full Report</DialogTitle>
            <DialogDescription>
              Episode details from the completed analysis.
            </DialogDescription>
          </DialogHeader>

          <dl className="grid max-h-[60vh] gap-3 overflow-y-auto">
            {META_FIELD_ORDER.map((key) => {
              const value = metaData?.[key];
              if (value === undefined || value === null || value === "") {
                return null;
              }

              const displayValue =
                key === "episode_length" && typeof value === "number"
                  ? `${value} mins`
                  : String(value);

              return (
                <div
                  key={key}
                  className="grid gap-1 border-b border-[#EEEDf7] pb-3 last:border-b-0"
                >
                  <dt className="text-[10px] tracking-[0.5px] text-[#5F5E5E] uppercase">
                    {formatMetaLabel(key)}
                  </dt>
                  <dd className="text-sm leading-5 text-[#1A1B22]">
                    {displayValue}
                  </dd>
                </div>
              );
            })}
          </dl>
        </DialogContent>
      </Dialog>
    </>
  );
}
