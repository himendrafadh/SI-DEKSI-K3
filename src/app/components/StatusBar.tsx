import { Wifi, Cloud, Server, CheckCircle2 } from "lucide-react";

export function StatusBar() {
  return (
    <div className="bg-slate-900/50 border-b border-slate-700/50 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* System Time */}
        <div className="flex items-center gap-6">
          <div>
            <p className="text-xs text-slate-500">System Time</p>
            <p className="text-white font-mono text-sm">Monday, March 16, 2026 - 14:32:45</p>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-4">
          {/* IoT Connection */}
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
            <Wifi className="w-4 h-4 text-emerald-400" />
            <div className="flex flex-col">
              <span className="text-xs text-emerald-400 font-medium">IoT Connected</span>
            </div>
          </div>

          {/* Cloud Sync */}
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1.5 rounded-lg">
            <Cloud className="w-4 h-4 text-blue-400" />
            <div className="flex flex-col">
              <span className="text-xs text-blue-400 font-medium">Cloud Synced</span>
            </div>
          </div>

          {/* Server Status */}
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
            <Server className="w-4 h-4 text-emerald-400" />
            <div className="flex flex-col">
              <span className="text-xs text-emerald-400 font-medium">Server Online</span>
            </div>
          </div>

          {/* System Health */}
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div className="flex flex-col">
              <span className="text-xs text-emerald-400 font-medium">All Systems OK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
