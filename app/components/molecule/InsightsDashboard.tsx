export default function InsightsDashboard() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      {/* Header */}
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

      {/* Global Key Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex min-h-32 flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Total Podcasts
          </span>

          <span className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
            12
          </span>
        </div>

        <div className="flex min-h-32 flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Avg. Watch Time
          </span>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight text-red-600">
              42
            </span>

            <span className="text-sm text-gray-500">mins</span>
          </div>
        </div>

        <div className="flex min-h-32 flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Ad Placements
          </span>

          <span className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
            48
          </span>
        </div>

        <div className="flex min-h-32 flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Overall Sentiment
          </span>

          <span className="mt-4 text-lg font-semibold text-emerald-600">
            Mostly Positive
          </span>
        </div>
      </div>

      {/* Top Performers & Trends */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Top Performers */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <h3 className="mb-6 text-base font-semibold text-gray-900">
            Top Performers
          </h3>

          <div className="flex flex-col">
            {/* Rank 1 */}
            <div className="group flex items-center gap-3 py-3 first:pt-0">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHYPGmU0pCxO6e0qOKj77JjcevRV6RRMGlBqvJF-xhqyBqunI_me-Ft98-yTcbzBJGjzBhYB542BxGihwpRFF8hyxADaLjmiZz7L0v4XngRNZxUiM3xYDnbA6aOungqIsZF1FN1BL6nHJ6Ti0eCfaV4VKsw53-xwI6ulyQvNx5um_xweyCG_zpGds76usZQpIk0u-V-0BIJFBuEdkTa_KQ09Q79tM8AEvhzM7JLrXHfJOwFgdmRjs_QQ"
                  alt="Why the Rich Think Differently"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium text-gray-900 transition-colors group-hover:text-red-600">
                  Why the Rich Think Differently
                </h4>

                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[16px] text-red-600"
                  >
                    timer
                  </span>

                  <span className="text-xs font-medium tabular-nums text-red-600">
                    84.5 mins
                  </span>
                </div>
              </div>

              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                1
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Rank 2 */}
            <div className="group flex items-center gap-3 py-3">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS_ky2YtuXno6_vsgkRJaCcl5MmkYCCiT7YrI3Fo54yu5RbGP0Nfr7nT929BXeDU0H4hWCcpsL4TPVh6LTu8JMm0_LBT2KvWZ-vj39LvZU9_t5_lAWUKLohDOWFiqLJVekV3DkqEdFsAQ5SrFrIuJQDrN_V7QujHn5xK-cGK7Z39w3yaRlkxSGlmXmediX5JPqQ7PYJTc-JXT_Bfr87MIJVwv65NnC3J_fMh8AiyKQ47NC1MQjgj3CvQ"
                  alt="Productivity At Scale"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium text-gray-900 transition-colors group-hover:text-red-600">
                  Productivity At Scale
                </h4>

                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[16px] text-gray-400"
                  >
                    timer
                  </span>

                  <span className="text-xs font-medium tabular-nums text-gray-500">
                    32.1 mins
                  </span>
                </div>
              </div>

              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                2
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Rank 3 */}
            <div className="group flex items-center gap-3 py-3 last:pb-0">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRkkFGXHfWEQITJbkIYWYiWTsO2En1DLL33LHntNvQpU5_s2YBmIwgyUVcrVFfRcU7VJUVSBxWCw8NXGisvOEI-TjNL9udIY6u4K1wEIyLQibKPl4cUA9ktyu4pQlkFlh6BBdzSH_g5wuMoF_Q6FF4CNnEg-jeQelC8bQxMXXbb0rb82Q2Jqcj-fPJVlHUjOePxDjMnw1s3eP-wQeNYlllLXSlWWlssT_5qDZncdMROcMndjHOeNZ4-A"
                  alt="AI in 2026: The Shift"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-medium text-gray-900 transition-colors group-hover:text-red-600">
                  AI in 2026: The Shift
                </h4>

                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[16px] text-gray-400"
                  >
                    timer
                  </span>

                  <span className="text-xs font-medium tabular-nums text-gray-500">
                    18.4 mins
                  </span>
                </div>
              </div>

              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                3
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* AI Insight */}
          <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-5 sm:p-6">
            <span
              aria-hidden="true"
              className="material-symbols-outlined shrink-0 text-2xl text-red-600"
            >
              lightbulb
            </span>

            <div>
              <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-900">
                AI Insight
              </h4>

              <p className="text-sm leading-6 text-gray-600">
                Episodes published on weekends see 15% higher watch time
                retention compared to mid-week releases.
              </p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Publishing Performance */}
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
                  <div className="group relative h-[20%] w-full rounded-t-sm bg-gray-200 transition-colors hover:bg-red-200">
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
                      Mon
                    </span>
                  </div>

                  <div className="group relative h-[30%] w-full rounded-t-sm bg-gray-200 transition-colors hover:bg-red-200">
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
                      Wed
                    </span>
                  </div>

                  <div className="group relative h-[40%] w-full rounded-t-sm bg-gray-200 transition-colors hover:bg-red-200">
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
                      Fri
                    </span>
                  </div>

                  <div className="group relative h-[90%] w-full rounded-t-sm bg-red-600 transition-colors hover:bg-red-700">
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-red-600">
                      Sat
                    </span>
                  </div>

                  <div className="group relative h-[60%] w-full rounded-t-sm bg-gray-200 transition-colors hover:bg-red-200">
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Audience Pull */}
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
                      68%
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    aria-label="Host Popularity"
                    aria-valuenow={68}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
                  >
                    <div className="h-full w-[68%] rounded-full bg-red-600" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-gray-700">
                      Guest Popularity
                    </span>

                    <span className="text-xs font-semibold tabular-nums text-gray-500">
                      42%
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    aria-label="Guest Popularity"
                    aria-valuenow={42}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
                  >
                    <div className="h-full w-[42%] rounded-full bg-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}