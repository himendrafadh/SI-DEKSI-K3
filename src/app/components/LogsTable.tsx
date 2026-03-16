import { CheckCircle2, XCircle, Camera } from "lucide-react";
import { PPEIcon } from "./PPEIcon";
import { useState } from "react";
import { SnapshotModal } from "./SnapshotModal";

interface LogEntry {
  id: string;
  date: string;
  time: string;
  worker: string;
  workerId: string;
  status: "safe" | "violation";
  ppe: {
    helmet: boolean;
    vest: boolean;
    shoes: boolean;
    mask: boolean;
  };
  area: string;
  notes?: string;
}

// Mock data for the logs table
const logsData: LogEntry[] = [
  {
    id: "1",
    date: "2026-03-16",
    time: "14:32:45",
    worker: "Ahmad Budiman",
    workerId: "WRK-2024-0142",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 01",
  },
  {
    id: "2",
    date: "2026-03-16",
    time: "14:31:22",
    worker: "Siti Nurhaliza",
    workerId: "WRK-2024-0089",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 02",
  },
  {
    id: "3",
    date: "2026-03-16",
    time: "14:29:18",
    worker: "Budi Santoso",
    workerId: "WRK-2024-0105",
    status: "violation",
    ppe: { helmet: false, vest: true, shoes: true, mask: true },
    area: "Area 01",
    notes: "Missing safety helmet",
  },
  {
    id: "4",
    date: "2026-03-16",
    time: "14:27:45",
    worker: "Dewi Lestari",
    workerId: "WRK-2024-0178",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 03",
  },
  {
    id: "5",
    date: "2026-03-16",
    time: "14:25:33",
    worker: "Eko Prasetyo",
    workerId: "WRK-2024-0221",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 02",
  },
  {
    id: "6",
    date: "2026-03-16",
    time: "14:22:10",
    worker: "Rina Wijaya",
    workerId: "WRK-2024-0067",
    status: "violation",
    ppe: { helmet: true, vest: false, shoes: true, mask: true },
    area: "Area 01",
    notes: "Missing safety vest",
  },
  {
    id: "7",
    date: "2026-03-16",
    time: "14:18:55",
    worker: "Agus Setiawan",
    workerId: "WRK-2024-0198",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 02",
  },
  {
    id: "8",
    date: "2026-03-16",
    time: "14:15:40",
    worker: "Maya Kartika",
    workerId: "WRK-2024-0134",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 03",
  },
  {
    id: "9",
    date: "2026-03-16",
    time: "14:12:28",
    worker: "Rudi Hermawan",
    workerId: "WRK-2024-0256",
    status: "violation",
    ppe: { helmet: true, vest: true, shoes: false, mask: true },
    area: "Area 01",
    notes: "Missing safety shoes",
  },
  {
    id: "10",
    date: "2026-03-16",
    time: "14:09:15",
    worker: "Indah Permata",
    workerId: "WRK-2024-0092",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 02",
  },
  {
    id: "11",
    date: "2026-03-16",
    time: "14:05:42",
    worker: "Hendra Wijaya",
    workerId: "WRK-2024-0173",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 03",
  },
  {
    id: "12",
    date: "2026-03-16",
    time: "14:02:30",
    worker: "Lina Susanti",
    workerId: "WRK-2024-0211",
    status: "violation",
    ppe: { helmet: false, vest: false, shoes: true, mask: true },
    area: "Area 01",
    notes: "Multiple violations: helmet, vest",
  },
  {
    id: "13",
    date: "2026-03-16",
    time: "13:58:17",
    worker: "Bambang Sutrisno",
    workerId: "WRK-2024-0045",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 02",
  },
  {
    id: "14",
    date: "2026-03-16",
    time: "13:55:05",
    worker: "Fitri Handayani",
    workerId: "WRK-2024-0188",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 03",
  },
  {
    id: "15",
    date: "2026-03-16",
    time: "13:51:48",
    worker: "Dedi Kurniawan",
    workerId: "WRK-2024-0229",
    status: "safe",
    ppe: { helmet: true, vest: true, shoes: true, mask: true },
    area: "Area 01",
  },
];

export function LogsTable() {
  const [selectedSnapshot, setSelectedSnapshot] = useState<LogEntry | null>(null);

  const handleSnapshotClick = (entry: LogEntry) => {
    setSelectedSnapshot(entry);
  };

  const handleCloseModal = () => {
    setSelectedSnapshot(null);
  };

  return (
    <>
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Historical Records</h3>
              <p className="text-sm text-slate-400 mt-1">{logsData.length} entries found</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Showing:</span>
              <select className="bg-slate-900/50 border border-slate-700 rounded px-3 py-1.5 text-white text-sm focus:outline-none focus:border-blue-500">
                <option value="15">15 per page</option>
                <option value="30">30 per page</option>
                <option value="50">50 per page</option>
                <option value="100">100 per page</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/30 border-b border-slate-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Worker Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Worker ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Detected PPE
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Area
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Snapshot
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {logsData.map((entry) => (
                <tr key={entry.id} className="hover:bg-slate-900/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-white text-sm font-medium">{entry.date}</div>
                      <div className="text-slate-400 text-xs font-mono mt-0.5">{entry.time}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white text-sm font-medium">{entry.worker}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-400 text-sm font-mono">{entry.workerId}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {entry.status === "safe" ? (
                      <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/50 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold text-emerald-400">Safe</span>
                      </div>
                    ) : (
                      <div className="inline-flex flex-col gap-1">
                        <div className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-500/50 px-3 py-1.5 rounded-lg">
                          <XCircle className="w-4 h-4 text-red-400" />
                          <span className="text-xs font-semibold text-red-400">Violation</span>
                        </div>
                        {entry.notes && (
                          <span className="text-xs text-amber-400">{entry.notes}</span>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <PPEIcon type="helmet" isPresent={entry.ppe.helmet} />
                      <PPEIcon type="vest" isPresent={entry.ppe.vest} />
                      <PPEIcon type="shoes" isPresent={entry.ppe.shoes} />
                      <PPEIcon type="mask" isPresent={entry.ppe.mask} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300 text-sm">{entry.area}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleSnapshotClick(entry)}
                      className="group relative w-14 h-14 bg-slate-700/50 rounded border border-slate-600 hover:border-blue-500 transition-all overflow-hidden"
                    >
                      <Camera className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-slate-900/50 px-6 py-4 border-t border-slate-700/50 flex items-center justify-between">
          <div className="text-sm text-slate-400">
            Showing <span className="text-white font-medium">1-15</span> of{" "}
            <span className="text-white font-medium">{logsData.length}</span> entries
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Snapshot Modal */}
      {selectedSnapshot && (
        <SnapshotModal
          isOpen={!!selectedSnapshot}
          onClose={handleCloseModal}
          timestamp={`${selectedSnapshot.date} ${selectedSnapshot.time}`}
          worker={selectedSnapshot.worker}
          workerId={selectedSnapshot.workerId}
        />
      )}
    </>
  );
}
