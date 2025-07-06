import AnalyticDashboard from "../molecule/AnalyticDashboard";
import AnalyticNavbar from "../molecule/AnalyticNavbar";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full">
        <AnalyticNavbar />
      </div>
      <div className="w-full">
        <AnalyticDashboard />
      </div>
    </div>
  );
}
