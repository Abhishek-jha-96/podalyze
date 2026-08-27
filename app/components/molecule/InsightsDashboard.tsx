import { Lightbulb } from "lucide-react";
import type { ReactNode } from "react";
import type {
  DashboardMetrics,
  LastWeekProjectDetails,
  OverallSentiment,
  TopProject,
} from "~/constants/interfaces";
import { cn, getYoutubeThumbnail } from "~/lib/utils";
import { useFetchDashboardQuery } from "~/store/features/projects/projectAPI";
import { Spinner } from "./spinnerLoader";

const WEEKDAYS: Array<keyof LastWeekProjectDetails> = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WEEKDAY_SHORT: Record<keyof LastWeekProjectDetails, string> = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

function formatMinutes(value: number): string {
  if (!value) return "0";
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function sentimentCopy(sentiment: OverallSentiment | null): {
  label: string;
  className: string;
} {
  switch (sentiment) {
    case "Positive":
      return { label: "Mostly Positive", className: "text-emerald-600" };
    case "Negative":
      return { label: "Mostly Negative", className: "text-red-600" };
    case "Neutral":
      return { label: "Mostly Neutral", className: "text-gray-600" };
    default:
      return { label: "No data", className: "text-gray-400" };
  }
}

function peakWeekday(
  details: LastWeekProjectDetails,
): keyof LastWeekProjectDetails | null {
  let peak: keyof LastWeekProjectDetails | null = null;
  let max = 0;

  for (const day of WEEKDAYS) {
    if (details[day] > max) {
      max = details[day];
      peak = day;
    }
  }

  return peak;
}

function KeyMetricCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-32 flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
        {title}
      </span>
      {children}
    </div>
  );
}

function TopPerformerRow({
  project,
  rank,
  thumbnailIndex,
}: {
  project: TopProject;
  rank: number;
  thumbnailIndex: number;
}) {
  const title = project.title || "Untitled podcast";

  return (
    <div className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
        <img
          src={getYoutubeThumbnail(project.url, thumbnailIndex)}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-medium text-gray-900 transition-colors group-hover:text-red-600">
          {title}
        </h4>

        <div className="mt-1 flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className={cn(
              "material-symbols-outlined text-[16px]",
              rank === 1 ? "text-red-600" : "text-gray-400",
            )}
          >
            timer
          </span>

          <span
            className={cn(
              "text-xs font-medium tabular-nums",
              rank === 1 ? "text-red-600" : "text-gray-500",
            )}
          >
            {formatMinutes(project.predictedWatchTime)} mins
          </span>
        </div>
      </div>

      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
        {rank}
      </div>
    </div>
  );
}

function InsightsContent({
  metrics,
}: {
  metrics: DashboardMetrics;
}) {
  const sentiment = sentimentCopy(metrics.overallSentiment);
  const peakDay = peakWeekday(metrics.lastWeekProjectDetails);
  const maxWatchTime = Math.max(
    ...WEEKDAYS.map((day) => metrics.lastWeekProjectDetails[day]),
    0,
  );
  const hostPopularity = Math.min(Math.max(metrics.hostPopularity, 0), 100);
  const guestPopularity = Math.min(Math.max(metrics.guestPopularity, 0), 100);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KeyMetricCard title="Total Podcasts">
          <span className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
            {metrics.totalProjects}
          </span>
        </KeyMetricCard>

        <KeyMetricCard title="Avg. Watch Time">
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight text-red-600">
              {formatMinutes(metrics.avgWatchTime)}
            </span>
            <span className="text-sm text-gray-500">mins</span>
          </div>
        </KeyMetricCard>

        <KeyMetricCard title="Ad Placements">
          <span className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
            {metrics.adPlacements}
          </span>
        </KeyMetricCard>

        <KeyMetricCard title="Overall Sentiment">
          <span className={cn("mt-4 text-lg font-semibold", sentiment.className)}>
            {sentiment.label}
          </span>
        </KeyMetricCard>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <h3 className="mb-6 text-base font-semibold text-gray-900">
            Top Performers
          </h3>

          {metrics.top3Projects.length === 0 ? (
            <p className="text-sm text-gray-500">
              No predicted watch times yet. Analyze a podcast to see top
              performers.
            </p>
          ) : (
            <div className="flex flex-col">
              {metrics.top3Projects.map((project, index) => (
                <div key={project.id}>
                  {index > 0 ? <div className="border-t border-gray-100" /> : null}
                  <TopPerformerRow
                    project={project}
                    rank={index + 1}
                    thumbnailIndex={index}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-5 sm:p-6">
            <Lightbulb size={50} color="red" />

            <div>
              <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-900">
                AI Insight
              </h4>

              <p className="text-sm leading-6 text-gray-600">
                {peakDay
                  ? `Episodes published on ${peakDay}s currently lead in predicted watch time across the last 7 days.`
                  : "Publish more episodes this week to compare predicted watch time by day."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex min-h-72 flex-col rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
              <h3 className="mb-4 text-base font-semibold text-gray-900">
                Publishing Performance
              </h3>

              <div className="relative flex min-h-48 flex-1 items-end pt-4">
                <div className="absolute left-0 top-0 flex h-[calc(100%-1.5rem)] flex-col justify-between text-[10px] text-gray-400">
                  <span>High</span>
                  <span>Med</span>
                  <span>Low</span>
                </div>

                <div className="ml-8 flex h-full w-full items-end gap-2 border-b border-gray-200 pb-1">
                  {WEEKDAYS.map((day) => {
                    const value = metrics.lastWeekProjectDetails[day];
                    const height =
                      maxWatchTime > 0
                        ? Math.max(8, Math.round((value / maxWatchTime) * 100))
                        : 8;
                    const isPeak = peakDay === day && value > 0;

                    return (
                      <div
                        key={day}
                        title={`${WEEKDAY_SHORT[day]}: ${formatMinutes(value)} mins`}
                        className={cn(
                          "group relative w-full rounded-t-sm transition-colors",
                          isPeak
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-gray-200 hover:bg-red-200",
                        )}
                        style={{ height: `${height}%` }}
                      >
                        <span
                          className={cn(
                            "absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px]",
                            isPeak
                              ? "font-semibold text-red-600"
                              : "text-gray-500",
                          )}
                        >
                          {WEEKDAY_SHORT[day]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex min-h-72 flex-col rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
              <h3 className="mb-4 text-base font-semibold text-gray-900">
                Audience Pull
              </h3>

              <div className="flex flex-1 flex-col justify-center gap-6">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-gray-700">
                      Host Popularity
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-red-600">
                      {formatMinutes(hostPopularity)}%
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    aria-label="Host Popularity"
                    aria-valuenow={Math.round(hostPopularity)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
                  >
                    <div
                      className="h-full rounded-full bg-red-600"
                      style={{ width: `${hostPopularity}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-gray-700">
                      Guest Popularity
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-gray-500">
                      {formatMinutes(guestPopularity)}%
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    aria-label="Guest Popularity"
                    aria-valuenow={Math.round(guestPopularity)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
                  >
                    <div
                      className="h-full rounded-full bg-gray-500"
                      style={{ width: `${guestPopularity}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function InsightsDashboard() {
  const { data, isLoading, isError } = useFetchDashboardQuery();

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900">
            Insights
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Trends across your portfolio.
          </p>
        </div>
      </header>

      {isLoading ? (
        <div className="flex min-h-64 items-center justify-center">
          <Spinner />
        </div>
      ) : isError || !data ? (
        <p className="text-sm text-gray-500">
          Could not load dashboard metrics. Try again in a moment.
        </p>
      ) : (
        <InsightsContent metrics={data} />
      )}
    </section>
  );
}
