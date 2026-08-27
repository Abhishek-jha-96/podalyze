import { Bell, Plus, Search } from "lucide-react";
import { AddModal } from "./AddModal";

interface AnalyticHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function AnalyticHeader({
  searchQuery,
  onSearchChange,
}: AnalyticHeaderProps) {
  return (
    <header className="flex w-full items-center justify-between gap-6 border-b border-[#EEEDf7] bg-white px-8 py-3">
      <div className="relative w-full max-w-md">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-[15px] -translate-y-1/2 text-[#5F5E5E]" />
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search across all podcasts..."
          className="w-full rounded-lg border border-[#EEEDf7] bg-[#F4F2FD] py-[10.5px] pr-4 pl-10 text-sm text-[#1A1B22] placeholder:text-[#6B7280] outline-none focus:border-[#B02713]/40 focus:ring-2 focus:ring-[#B02713]/10"
        />
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="flex items-center justify-center text-[#5F5E5E] hover:text-[#1A1B22]"
        >
          <Bell className="size-[15px]" />
        </button>

        <AddModal
          trigger={
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-[#B02713] px-5 py-2 text-sm text-white shadow-sm transition-colors hover:bg-[#9a2210]"
            >
              <Plus className="size-3" />
              <span>Add Podcast</span>
            </button>
          }
        />
      </div>
    </header>
  );
}
