import {
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import LogoIcon from "~/assets/logo";
import type { AnalyticNavItem } from "~/constants/interfaces";
import { cn } from "~/lib/utils";
import { useAppSelector } from "~/store/hooks";

interface AnalyticNavbarProps {
  activeNav: AnalyticNavItem;
  onNavChange: (item: AnalyticNavItem) => void;
}

const NAV_ITEMS: {
  id: AnalyticNavItem;
  label: string;
  icon: typeof LayoutDashboard;
}[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "insights", label: "Insights", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function AnalyticNavbar({
  activeNav,
  onNavChange,
}: AnalyticNavbarProps) {
  const user = useAppSelector((state) => state.auth.user);
  const displayName = user
    ? `${user.firstName} ${user.lastName}`.trim()
    : "Podalyze User";
  const initials = user
    ? `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase()
    : "PU";

  return (
    <aside className="flex w-[20%] min-w-[220px] max-w-[280px] flex-col border-r border-[#EEEDf7] bg-white">
      <div className="flex items-center gap-3 p-6">
        <LogoIcon />
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = activeNav === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavChange(id)}
              className={cn(
                "flex w-[87%] items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors",
                isActive
                  ? "bg-[#D34029] text-white"
                  : "text-[#5F5E5E] hover:bg-[#F4F2FD]"
              )}
            >
              <Icon
                className={cn(
                  "size-[18px] shrink-0",
                  isActive ? "text-white" : "text-[#5F5E5E]"
                )}
              />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-[#EEEDf7] p-4">
        <div className="flex w-[87%] items-center gap-3 rounded-xl p-2">
          <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#FFB4A6] bg-[#F4F2FD] text-xs font-bold text-[#B02713]">
            {user ? (
              initials
            ) : (
              <img
                src="/analytics/profile.png"
                alt=""
                className="size-full object-cover"
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-bold leading-4 text-[#1A1B22]">
              {displayName}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
