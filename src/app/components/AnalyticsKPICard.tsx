import { LucideIcon } from "lucide-react";

interface AnalyticsKPICardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

export function AnalyticsKPICard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconBgColor,
  iconColor,
}: AnalyticsKPICardProps) {
  const changeColorMap = {
    positive: "text-emerald-400",
    negative: "text-red-400",
    neutral: "text-slate-400",
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/50 transition-all">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-slate-400 text-sm font-medium mb-2">{title}</p>
          <p className="text-white text-3xl font-bold mb-2">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${changeColorMap[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`${iconBgColor} p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
}
