import { ArrowRight, Youtube } from "lucide-react";
import type { IAnalyticProps } from "~/constants/interfaces";
import {
  cn,
  formatDisplayUrl,
  formatUpdatedAt,
  getSentimentMeta,
} from "~/lib/utils";

interface AnalyticCardProps extends IAnalyticProps {
  compact?: boolean;
}

export default function AnalyticCard({
  title,
  url,
  updatedAt,
  sentiment,
  sentimentTone,
  avgTime,
  status,
  thumbnail,
  onFullReport,
  compact = false,
}: AnalyticCardProps) {
  const sentimentMeta = getSentimentMeta(sentimentTone);
  const showActiveBadge = status === "active";

  return (
    <article
      className={cn(
        "w-full rounded-xl border border-[#EEEDf7] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
        compact && "h-full"
      )}
    >
      <div
        className={cn(
          "flex w-full gap-6",
          compact ? "flex-col" : "flex-col sm:flex-row sm:items-start"
        )}
      >
        <div
          className={cn(
            "relative shrink-0 overflow-hidden rounded-lg bg-[#E3E1EC]",
            compact
              ? "aspect-video w-full"
              : "aspect-video w-full sm:aspect-auto sm:min-h-[120px] sm:w-[21%] sm:min-w-[140px]"
          )}
        >
          <img
            src={thumbnail}
            alt=""
            className="h-full w-full object-cover"
          />
          {status && (
            <span className="absolute top-2 left-2 rounded bg-[#B02713] px-2 py-1 text-[10px] font-bold leading-[15px] tracking-wide text-white uppercase">
              Active
            </span>
          )}
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

          <div className="flex flex-col gap-4 border-t border-[#EEEDf7] pt-4 sm:flex-row sm:items-start sm:gap-8">
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
                    sentimentMeta.dotClass
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-bold leading-5",
                    sentimentMeta.textClass
                  )}
                >
                  {sentiment || sentimentMeta.label}
                </span>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end sm:pt-1">
              <button
                type="button"
                onClick={onFullReport}
                className="flex items-center gap-2 rounded-lg border border-[#B02713]/20 bg-[#F4F2FD] px-4 py-2 text-sm font-bold text-[#B02713] transition-colors hover:bg-[#EDE9FE]"
              >
                Full Report
                <ArrowRight className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
