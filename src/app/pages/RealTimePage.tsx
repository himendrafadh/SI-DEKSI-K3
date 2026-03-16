import { Users, TrendingUp, AlertTriangle } from "lucide-react";
import { StatsCard } from "../components/StatsCard";
import { VideoFeed } from "../components/VideoFeed";
import { VerificationPanel } from "../components/VerificationPanel";
import { ActivityLog } from "../components/ActivityLog";

export function RealTimePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Workers"
          value="42"
          icon={Users}
          iconBgColor="bg-blue-500/20"
          iconColor="text-blue-400"
          trend="↑ 3 from last hour"
        />
        <StatsCard
          title="Compliance Rate"
          value="95.2%"
          icon={TrendingUp}
          iconBgColor="bg-emerald-500/20"
          iconColor="text-emerald-400"
          trend="↑ 2.1% from yesterday"
        />
        <StatsCard
          title="Active Alerts"
          value="2"
          icon={AlertTriangle}
          iconBgColor="bg-amber-500/20"
          iconColor="text-amber-400"
          trend="Missing helmet detected"
        />
      </div>

      {/* Video Feed and Verification Panel Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
        <VideoFeed />
        <VerificationPanel />
      </div>

      {/* Activity Log */}
      <ActivityLog />
    </div>
  );
}
