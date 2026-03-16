import { CheckCircle2, AlertTriangle, Camera } from "lucide-react";

interface LogEntry {
  id: string;
  timestamp: string;
  worker: string;
  workerId: string;
  status: "compliant" | "violation";
  equipment: string[];
  area: string;
}

const logData: LogEntry[] = [
  {
    id: "1",
    timestamp: "14:32:45",
    worker: "Ahmad Budiman",
    workerId: "WRK-2024-0142",
    status: "compliant",
    equipment: ["Helmet", "Vest", "Shoes"],
    area: "Area 01",
  },
  {
    id: "2",
    timestamp: "14:31:22",
    worker: "Siti Nurhaliza",
    workerId: "WRK-2024-0089",
    status: "compliant",
    equipment: ["Helmet", "Vest", "Shoes"],
    area: "Area 02",
  },
  {
    id: "3",
    timestamp: "14:29:18",
    worker: "Budi Santoso",
    workerId: "WRK-2024-0105",
    status: "violation",
    equipment: ["Vest", "Shoes"],
    area: "Area 01",
  },
  {
    id: "4",
    timestamp: "14:27:45",
    worker: "Dewi Lestari",
    workerId: "WRK-2024-0178",
    status: "compliant",
    equipment: ["Helmet", "Vest", "Shoes"],
    area: "Area 03",
  },
  {
    id: "5",
    timestamp: "14:25:33",
    worker: "Eko Prasetyo",
    workerId: "WRK-2024-0221",
    status: "compliant",
    equipment: ["Helmet", "Vest", "Shoes"],
    area: "Area 02",
  },
];

export function ActivityLog() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900/50 px-4 py-3 border-b border-slate-700/50 flex items-center justify-between">
        <h3 className="text-white font-semibold text-sm">Recent Activity Log</h3>
        <button className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900/30 border-b border-slate-700/50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Worker
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Worker ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Equipment Detected
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Area
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Snapshot
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {logData.map((entry) => (
              <tr key={entry.id} className="hover:bg-slate-900/30 transition-colors">
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="text-slate-300 text-sm font-mono">{entry.timestamp}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="text-white text-sm font-medium">{entry.worker}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="text-slate-400 text-sm font-mono">{entry.workerId}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {entry.status === "compliant" ? (
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-semibold">Compliant</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-amber-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-xs font-semibold">Violation</span>
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {entry.equipment.map((item) => (
                      <span
                        key={item}
                        className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded border border-blue-500/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="text-slate-300 text-sm">{entry.area}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <button className="flex items-center justify-center w-12 h-12 bg-slate-700/50 rounded border border-slate-600 hover:border-blue-500 transition-colors">
                    <Camera className="w-4 h-4 text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
