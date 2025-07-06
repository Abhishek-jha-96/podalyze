import { BookHeadphonesIcon } from "lucide-react";

export default function NoContent() {
  return (
    <div className="w-2xl bg-white/40 outline-1 outline-black rounded-sm flex flex-col items-center text-center px-6 py-12 gap-6">
      <BookHeadphonesIcon className="w-16 h-16" />
      <h3 className="text-lg font-semibold">No Podcasts Added Yet</h3>
      <p className="text-sm text-muted-foreground">
        You haven't added any podcasts. Once you do, you'll see detailed analytics here.
        Start by uploading or linking your first podcast to get insights!
      </p>
    </div>
  );
}
