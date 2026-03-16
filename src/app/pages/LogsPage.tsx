import { FileText, Database } from "lucide-react";
import { LogsFilter } from "../components/LogsFilter";
import { LogsTable } from "../components/LogsTable";
import { toast } from "sonner";

export function LogsPage() {
  const handleExport = () => {
    toast.success("Report exported successfully!", {
      description: "Your safety compliance report has been downloaded as CSV.",
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold">Historical Logs</h2>
            <p className="text-slate-400 text-sm mt-1">View and analyze safety compliance records</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-4 py-2 rounded-lg">
          <Database className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 text-sm font-medium">Database Connected</span>
        </div>
      </div>

      {/* Filter Bar */}
      <LogsFilter onExport={handleExport} />

      {/* Logs Table */}
      <LogsTable />
    </div>
  );
}
