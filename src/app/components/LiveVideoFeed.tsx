import { motion } from "motion/react";
import { Video, Wifi } from "lucide-react";

interface BoundingBox {
  label: string;
  confidence: number;
  x: number;
  y: number;
  width: number;
  height: number;
  detected: boolean;
}

export function LiveVideoFeed() {
  // Mock bounding boxes for detected PPE
  const boundingBoxes: BoundingBox[] = [
    { label: "Safety Helmet", confidence: 0.96, x: 180, y: 40, width: 140, height: 100, detected: true },
    { label: "Safety Vest", confidence: 0.94, x: 160, y: 180, width: 180, height: 200, detected: true },
    { label: "Safety Shoes", confidence: 0.91, x: 170, y: 480, width: 160, height: 100, detected: true },
  ];

  return (
    <div className="relative bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-700">
      {/* Video Feed Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-slate-900/95 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <Video className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">LIVE FEED</p>
              <p className="text-slate-400 text-xs">Gate Camera 01</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1.5 rounded-lg">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-400 rounded-full"
            ></motion.div>
            <span className="text-emerald-400 text-xs font-bold">SCANNING</span>
          </div>
        </div>
      </div>

      {/* Video Content Area */}
      <div className="relative aspect-[4/3] bg-slate-800">
        {/* Placeholder for video feed - in real implementation, this would be a video element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
              <Video className="w-16 h-16 text-slate-600" />
            </div>
            <p className="text-slate-500 font-medium">Live Video Feed</p>
            <p className="text-slate-600 text-sm mt-1">YOLOv8 Detection Active</p>
          </div>
        </div>

        {/* Bounding Boxes */}
        {boundingBoxes.map((box, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="absolute border-2 border-emerald-400 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            style={{
              left: `${box.x}px`,
              top: `${box.y}px`,
              width: `${box.width}px`,
              height: `${box.height}px`,
            }}
          >
            {/* Label */}
            <div className="absolute -top-8 left-0 bg-emerald-500 text-white px-3 py-1 rounded-md text-xs font-bold shadow-lg">
              {box.label} {(box.confidence * 100).toFixed(0)}%
            </div>
            
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-emerald-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-emerald-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-emerald-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-emerald-400"></div>
          </motion.div>
        ))}

        {/* Scanning Line Effect */}
        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
        ></motion.div>
      </div>

      {/* Video Feed Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-slate-900/95 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold">ONLINE</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 text-xs">AI Detection: YOLOv8</span>
          </div>
          <div className="text-slate-400 text-xs font-mono">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}
