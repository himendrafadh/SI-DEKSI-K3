import { X } from "lucide-react";

interface SnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  timestamp: string;
  worker: string;
  workerId: string;
}

export function SnapshotModal({ isOpen, onClose, timestamp, worker, workerId }: SnapshotModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-lg max-w-4xl w-full overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold">Snapshot Details</h3>
            <p className="text-sm text-slate-400 mt-1">
              {worker} ({workerId}) - {timestamp}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="p-6">
          <div className="aspect-video bg-slate-950 rounded-lg flex items-center justify-center border border-slate-700">
            <div className="text-center">
              <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full"></div>
              </div>
              <p className="text-slate-500 text-sm">Snapshot Preview</p>
              <p className="text-slate-600 text-xs mt-1">AI Detection Data Available</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-slate-900/50 px-6 py-4 border-t border-slate-700 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
}
