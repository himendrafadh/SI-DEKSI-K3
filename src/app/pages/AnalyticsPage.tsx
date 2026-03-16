import { BarChart3, TrendingUp, XCircle, Building2 } from "lucide-react";
import { AnalyticsKPICard } from "../components/AnalyticsKPICard";
import { ComplianceTrendChart } from "../components/ComplianceTrendChart";
import { PPEViolationChart } from "../components/PPEViolationChart";
import { SafetyScoreGauge } from "../components/SafetyScoreGauge";
import { DepartmentComparisonChart } from "../components/DepartmentComparisonChart";
import { AnalyticsFilters } from "../components/AnalyticsFilters";

export function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <BarChart3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold">Safety Analytics</h2>
            <p className="text-slate-400 text-sm mt-1">
              Comprehensive insights and performance metrics
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Filters */}
      <AnalyticsFilters />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsKPICard
          title="Average Daily Compliance"
          value="94.7%"
          change="↑ 2.3% from last month"
          changeType="positive"
          icon={TrendingUp}
          iconBgColor="bg-emerald-500/20"
          iconColor="text-emerald-400"
        />
        <AnalyticsKPICard
          title="Total Violations This Month"
          value="128"
          change="↓ 15 from last month"
          changeType="positive"
          icon={XCircle}
          iconBgColor="bg-amber-500/20"
          iconColor="text-amber-400"
        />
        <AnalyticsKPICard
          title="Most Compliant Department"
          value="Quality Control"
          change="97.8% compliance rate"
          changeType="positive"
          icon={Building2}
          iconBgColor="bg-blue-500/20"
          iconColor="text-blue-400"
        />
      </div>

      {/* Charts Grid - Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
        <ComplianceTrendChart />
        <SafetyScoreGauge score={93} />
      </div>

      {/* Charts Grid - Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PPEViolationChart />
        <DepartmentComparisonChart />
      </div>
    </div>
  );
}