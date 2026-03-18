import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

interface AccessStatusBannerProps {
  status: "granted" | "denied" | "pending";
  message?: string;
}

export function AccessStatusBanner({ status, message }: AccessStatusBannerProps) {
  const statusConfig = {
    granted: {
      bg: "bg-emerald-500",
      icon: CheckCircle,
      title: "ACCESS GRANTED",
      subtitle: message || "All safety requirements met. You may proceed.",
      animation: { scale: [1, 1.02, 1] },
    },
    denied: {
      bg: "bg-red-500",
      icon: XCircle,
      title: "ACCESS DENIED",
      subtitle: message || "INCOMPLETE PPE - Please equip all required safety gear",
      animation: { scale: [1, 1.03, 1], opacity: [1, 0.9, 1] },
    },
    pending: {
      bg: "bg-amber-500",
      icon: AlertTriangle,
      title: "VERIFICATION IN PROGRESS",
      subtitle: "Please stand still and face the camera...",
      animation: { opacity: [1, 0.7, 1] },
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      animate={config.animation}
      transition={{
        duration: status === "denied" ? 0.8 : 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={`${config.bg} w-full py-8 px-8`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-6">
        <motion.div
          animate={
            status === "denied"
              ? { rotate: [0, -10, 10, -10, 0] }
              : status === "granted"
              ? { scale: [1, 1.2, 1] }
              : {}
          }
          transition={{
            duration: 0.5,
            repeat: status === "denied" ? Infinity : status === "granted" ? 1 : 0,
            repeatDelay: status === "denied" ? 0.5 : 0,
          }}
        >
          <Icon className="w-16 h-16 text-white" strokeWidth={2.5} />
        </motion.div>
        
        <div className="text-center">
          <h2 className="text-white text-5xl font-bold tracking-wide mb-2">
            {config.title}
          </h2>
          <p className="text-white/90 text-xl font-medium">
            {config.subtitle}
          </p>
        </div>

        {status === "denied" && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
          >
            <Icon className="w-16 h-16 text-white" strokeWidth={2.5} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
