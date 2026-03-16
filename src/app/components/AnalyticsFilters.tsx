import { Calendar, RefreshCw } from "lucide-react";
import { useState } from "react";

export function AnalyticsFilters() {
  const [timeframe, setTimeframe] = useState("monthly");
  const [comparisonEnabled, setComparisonEnabled] = useState(false);

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
      <div className="flex flex-wrap items-center gap-4 justify-between">
        {/* Left Side - Timeframe Selector */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-slate-400" />
            <span className="text-slate-400 text-sm font-medium">Timeframe:</span>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setTimeframe("weekly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeframe === "weekly"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe("monthly")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeframe === "monthly"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeframe("custom")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeframe === "custom"
                  ? "bg-blue-500 text-white"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Custom Range
            </button>
          </div>
        </div>

        {/* Right Side - Comparison Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-sm">Compare with previous period</span>
          </div>
          <button
            onClick={() => setComparisonEnabled(!comparisonEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              comparisonEnabled ? "bg-blue-500" : "bg-slate-700"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                comparisonEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Custom Date Range Inputs (shown when custom is selected) */}
      {timeframe === "custom" && (
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">Start Date</label>
              <input
                type="date"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">End Date</label>
              <input
                type="date"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* Comparison Info (shown when comparison is enabled) */}
      {comparisonEnabled && (
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <RefreshCw className="w-4 h-4 text-blue-400 mt-0.5" />
              <div>
                <p className="text-blue-400 text-sm font-medium">Comparison Mode Active</p>
                <p className="text-slate-400 text-xs mt-1">
                  Charts will display data compared to the previous {timeframe === "weekly" ? "week" : "month"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
