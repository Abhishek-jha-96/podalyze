import NoContent from "../cell/NoContent";
import { Button } from "../ui/button";

export default function AnalyticDashboard() {
  return (
    <div className="flex flex-col pt-4">
      <div className="flex justify-end px-5">
        <Button className="bg-primary-text text-lg py-7">
          <span>Add Podcast</span>
        </Button>
      </div>
      <div>
        <div className="flex justify-center items-center pt-10">
          <NoContent />
        </div>
      </div>
    </div>
  );
}
