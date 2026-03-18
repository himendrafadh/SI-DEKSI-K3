import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface PPEChecklistItemProps {
  icon: LucideIcon;
  label: string;
  status: "secured" | "missing" | "checking";
}

export function PPEChecklistItem({ icon: Icon, label, status }: PPEChecklistItemProps) {
  const statusConfig = {
    secured: {
      bg: "bg-emerald-500/20",
      border: "border-emerald-500",
      iconColor: "text-emerald-400",
      textColor: "text-emerald-400",
      label: "SECURED",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    },
    missing: {
      bg: "bg-red-500/20",
      border: "border-red-500",
      iconColor: "text-red-400",
      textColor: "text-red-400",
      label: "MISSING",
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.7)]",
    },
    checking: {
      bg: "bg-slate-700/20",
      border: "border-slate-500",
      iconColor: "text-slate-400",
      textColor: "text-slate-400",
      label: "CHECKING...",
      glow: "",
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      animate={
        status === "missing"
          ? { scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }
          : {}
      }
      transition={{
        duration: 0.8,
        repeat: status === "missing" ? Infinity : 0,
        repeatType: "loop",
      }}
      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${config.bg} ${config.border} ${config.glow}`}
    >
      <div className={`${config.iconColor}`}>
        <Icon className="w-8 h-8" strokeWidth={2.5} />
      </div>
      <div className="flex-1">
        <p className="text-white font-bold text-lg">{label}</p>
        <p className={`${config.textColor} text-sm font-bold mt-0.5`}>
          {config.label}
        </p>
      </div>
      {status === "secured" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
      )}
      {status === "missing" && (
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop" }}
          className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}
