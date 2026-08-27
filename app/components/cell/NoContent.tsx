import { BookHeadphonesIcon } from "lucide-react";

export default function NoContent() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-6 rounded-xl border border-[#EEEDf7] bg-white px-6 py-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <BookHeadphonesIcon className="size-16 text-[#B02713]" />
      <h3 className="text-lg font-semibold text-[#1A1B22]">
        No Podcasts Added Yet
      </h3>
      <p className="text-sm text-[#5F5E5E]">
        You haven&apos;t added any podcasts. Once you do, you&apos;ll see
        detailed analytics here. Start by uploading or linking your first
        podcast to get insights!
      </p>
    </div>
  );
}
