import NoContent from "../cell/NoContent";
import { Button } from "../ui/button";
import { AddModal } from "./AddModal";

export default function AnalyticDashboard() {
  return (
    <div className="flex flex-col pt-4">
      <div className="flex justify-end px-5">
        <AddModal />

      </div>
      <div>
        <div className="flex justify-center items-center pt-10">
          <NoContent />
        </div>
      </div>
    </div>
  );
}
