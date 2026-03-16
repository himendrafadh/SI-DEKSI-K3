import { Video, Maximize2 } from "lucide-react";

interface BoundingBox {
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

const boundingBoxes: BoundingBox[] = [
  { label: "Safety Helmet", x: 28, y: 8, width: 18, height: 12, color: "#10b981" },
  { label: "Vest", x: 22, y: 22, width: 30, height: 35, color: "#f59e0b" },
  { label: "Safety Shoes", x: 20, y: 72, width: 35, height: 20, color: "#3b82f6" },
];

export function VideoFeed() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900/50 px-4 py-3 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="w-4 h-4 text-blue-400" />
          <h3 className="text-white font-semibold text-sm">Live Camera Feed - Area 01</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-xs font-medium">RECORDING</span>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Video Container with AI Bounding Boxes */}
      <div className="relative aspect-video bg-slate-950">
        {/* Simulated video feed - using gradient as placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950">
          {/* Worker silhouette placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-1/3 h-4/5 bg-slate-700/30 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* AI Detection Overlay */}
        {boundingBoxes.map((box, index) => (
          <div
            key={index}
            className="absolute border-2 rounded"
            style={{
              left: `${box.x}%`,
              top: `${box.y}%`,
              width: `${box.width}%`,
              height: `${box.height}%`,
              borderColor: box.color,
            }}
          >
            {/* Label */}
            <div
              className="absolute -top-6 left-0 px-2 py-1 rounded text-xs font-semibold text-white"
              style={{ backgroundColor: box.color }}
            >
              {box.label}
            </div>
            {/* Corner markers */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: box.color }}></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: box.color }}></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: box.color }}></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: box.color }}></div>
          </div>
        ))}

        {/* AI Processing Indicator */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-500/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-xs font-medium">AI Processing</span>
          </div>
        </div>

        {/* FPS Counter */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg">
          <span className="text-emerald-400 text-xs font-mono">30 FPS</span>
        </div>

        {/* Timestamp */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg">
          <span className="text-white text-xs font-mono">2026-03-16 14:32:45</span>
        </div>
      </div>
    </div>
  );
}
