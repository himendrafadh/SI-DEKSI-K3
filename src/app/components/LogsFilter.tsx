import { Calendar, Search, Filter, Download } from "lucide-react";
import { useState } from "react";

interface LogsFilterProps {
  onExport: () => void;
}

export function LogsFilter({ onExport }: LogsFilterProps) {
  const [dateRange, setDateRange] = useState("today");
  const [workerId, setWorkerId] = useState("");
  const [violationType, setViolationType] = useState("all");

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* Date Range Filter */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs text-slate-400 mb-1.5">Date Range</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>

        {/* Worker ID Search */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs text-slate-400 mb-1.5">Worker ID</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value)}
              placeholder="Search by ID or name..."
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Violation Type Filter */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs text-slate-400 mb-1.5">Violation Type</label>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={violationType}
              onChange={(e) => setViolationType(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="all">All Records</option>
              <option value="compliant">Compliant Only</option>
              <option value="violations">Violations Only</option>
              <option value="missing-helmet">Missing Helmet</option>
              <option value="missing-vest">Missing Vest</option>
              <option value="missing-shoes">Missing Shoes</option>
              <option value="missing-mask">Missing Mask</option>
            </select>
          </div>
        </div>

        {/* Export Button */}
        <div className="flex items-end">
          <button
            onClick={onExport}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
