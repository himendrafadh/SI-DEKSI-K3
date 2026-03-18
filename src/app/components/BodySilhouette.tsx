import { motion } from "motion/react";

interface BodySilhouetteProps {
  missingPPE: Array<"helmet" | "vest" | "shoes" | "mask">;
}

export function BodySilhouette({ missingPPE }: BodySilhouetteProps) {
  if (missingPPE.length === 0) return null;

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm border-2 border-red-500/50 rounded-2xl p-6">
      <div className="mb-4">
        <h3 className="text-red-400 font-bold text-lg flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          MISSING EQUIPMENT
        </h3>
        <p className="text-slate-400 text-sm mt-1">Please equip the highlighted items</p>
      </div>

      {/* Body Silhouette SVG */}
      <div className="relative flex justify-center">
        <svg
          width="200"
          height="400"
          viewBox="0 0 200 400"
          className="text-slate-600"
        >
          {/* Body outline */}
          <g stroke="currentColor" fill="none" strokeWidth="3">
            {/* Head */}
            <circle cx="100" cy="50" r="35" />
            
            {/* Torso */}
            <path d="M 100 85 L 100 200" />
            <ellipse cx="100" cy="150" rx="50" ry="70" />
            
            {/* Arms */}
            <path d="M 100 100 L 60 150 L 50 200" />
            <path d="M 100 100 L 140 150 L 150 200" />
            
            {/* Legs */}
            <path d="M 90 200 L 80 300 L 75 370" />
            <path d="M 110 200 L 120 300 L 125 370" />
            
            {/* Feet */}
            <ellipse cx="75" cy="380" rx="15" ry="8" />
            <ellipse cx="125" cy="380" rx="15" ry="8" />
          </g>

          {/* Highlighted areas for missing PPE */}
          {missingPPE.includes("helmet") && (
            <motion.g
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <circle
                cx="100"
                cy="50"
                r="40"
                fill="none"
                stroke="#ef4444"
                strokeWidth="6"
                className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <text
                x="100"
                y="25"
                textAnchor="middle"
                className="text-xs font-bold fill-red-400"
              >
                HELMET
              </text>
            </motion.g>
          )}

          {missingPPE.includes("vest") && (
            <motion.g
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            >
              <ellipse
                cx="100"
                cy="150"
                rx="55"
                ry="75"
                fill="none"
                stroke="#ef4444"
                strokeWidth="6"
                className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <text
                x="100"
                y="115"
                textAnchor="middle"
                className="text-xs font-bold fill-red-400"
              >
                VEST
              </text>
            </motion.g>
          )}

          {missingPPE.includes("mask") && (
            <motion.g
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.1 }}
            >
              <rect
                x="75"
                y="55"
                width="50"
                height="25"
                rx="5"
                fill="none"
                stroke="#ef4444"
                strokeWidth="6"
                className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <text
                x="175"
                y="70"
                textAnchor="start"
                className="text-xs font-bold fill-red-400"
              >
                → MASK
              </text>
            </motion.g>
          )}

          {missingPPE.includes("shoes") && (
            <motion.g
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            >
              <ellipse
                cx="75"
                cy="380"
                rx="20"
                ry="12"
                fill="none"
                stroke="#ef4444"
                strokeWidth="6"
                className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <ellipse
                cx="125"
                cy="380"
                rx="20"
                ry="12"
                fill="none"
                stroke="#ef4444"
                strokeWidth="6"
                className="drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <text
                x="100"
                y="410"
                textAnchor="middle"
                className="text-xs font-bold fill-red-400"
              >
                SAFETY SHOES
              </text>
            </motion.g>
          )}
        </svg>
      </div>

      {/* Missing items list */}
      <div className="mt-6 space-y-2">
        {missingPPE.map((item) => (
          <motion.div
            key={item}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-red-400 font-bold text-sm uppercase">
              {item === "helmet" && "Safety Helmet Required"}
              {item === "vest" && "Safety Vest Required"}
              {item === "shoes" && "Safety Shoes Required"}
              {item === "mask" && "Face Mask Required"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
