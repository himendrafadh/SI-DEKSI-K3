import { User, CheckCircle2, Clock } from "lucide-react";

export function VerificationPanel() {
  return (
    <div className="w-80 bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900/50 px-4 py-3 border-b border-slate-700/50">
        <h3 className="text-white font-semibold text-sm">Verification Status</h3>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Face Recognition Result */}
        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-400">Recognition Method</p>
              <p className="text-white font-semibold">HOG-based</p>
            </div>
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <div>
              <p className="text-xs text-slate-400">Worker Name</p>
              <p className="text-white font-semibold">Ahmad Budiman</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Worker ID</p>
              <p className="text-white font-mono">WRK-2024-0142</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Confidence</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: "98%" }}></div>
                </div>
                <span className="text-emerald-400 text-sm font-semibold">98%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Equipment Status */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Equipment Detection</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Safety Helmet</span>
              </div>
              <span className="text-emerald-400 text-xs">Detected</span>
            </div>
            <div className="flex items-center justify-between bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Safety Vest</span>
              </div>
              <span className="text-amber-400 text-xs">Detected</span>
            </div>
            <div className="flex items-center justify-between bg-blue-500/10 border border-blue-500/30 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Safety Shoes</span>
              </div>
              <span className="text-blue-400 text-xs">Detected</span>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-700/50">
          <Clock className="w-3 h-3 text-slate-400" />
          <span className="text-xs text-slate-400">Updated 2s ago</span>
        </div>
      </div>
    </div>
  );
}
