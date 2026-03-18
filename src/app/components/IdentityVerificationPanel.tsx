import { User, IdCard, CheckCircle2, Clock } from "lucide-react";
import { motion } from "motion/react";

interface IdentityVerificationPanelProps {
  status: "verified" | "verifying" | "unknown";
  name?: string;
  employeeId?: string;
  department?: string;
  profileImage?: string;
}

export function IdentityVerificationPanel({
  status,
  name = "Unknown",
  employeeId = "---",
  department = "---",
  profileImage,
}: IdentityVerificationPanelProps) {
  const statusConfig = {
    verified: {
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-400",
      icon: CheckCircle2,
      label: "VERIFIED",
    },
    verifying: {
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
      icon: Clock,
      label: "VERIFYING...",
    },
    unknown: {
      borderColor: "border-slate-600",
      bgColor: "bg-slate-700/10",
      textColor: "text-slate-400",
      icon: User,
      label: "UNKNOWN",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div
      className={`bg-slate-800/90 backdrop-blur-sm border-2 rounded-2xl p-6 ${config.borderColor} ${config.bgColor}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`${config.bgColor} p-2 rounded-lg`}>
          <User className={`w-5 h-5 ${config.textColor}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm">IDENTITY VERIFICATION</h3>
          <p className="text-slate-400 text-xs mt-0.5">HOG Face Recognition</p>
        </div>
        <div className="flex items-center gap-2">
          <StatusIcon className={`w-5 h-5 ${config.textColor}`} />
          <span className={`text-xs font-bold ${config.textColor}`}>
            {config.label}
          </span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        {/* Profile Photo */}
        <div className="relative">
          <motion.div
            animate={
              status === "verifying"
                ? { scale: [1, 1.05, 1] }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: status === "verifying" ? Infinity : 0,
            }}
            className={`w-20 h-20 rounded-full border-3 overflow-hidden ${
              status === "verified"
                ? "border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                : status === "verifying"
                ? "border-blue-500"
                : "border-slate-600"
            }`}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                <User className="w-10 h-10 text-slate-500" />
              </div>
            )}
          </motion.div>
          {status === "verified" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-slate-800"
            >
              <CheckCircle2 className="w-4 h-4 text-white" />
            </motion.div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <p className="text-white font-bold text-xl mb-1">{name}</p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <IdCard className="w-4 h-4" />
            <span>ID: {employeeId}</span>
          </div>
          <p className="text-slate-400 text-sm mt-1">{department}</p>
        </div>
      </div>

      {/* Verification Details */}
      {status === "verified" && (
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700/50">
          <div className="bg-slate-900/50 rounded-lg p-3">
            <p className="text-slate-400 text-xs mb-1">Confidence</p>
            <p className="text-emerald-400 font-bold text-lg">98.7%</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-3">
            <p className="text-slate-400 text-xs mb-1">Match Time</p>
            <p className="text-blue-400 font-bold text-lg">0.3s</p>
          </div>
        </div>
      )}
    </div>
  );
}
