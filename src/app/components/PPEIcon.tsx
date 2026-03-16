import { HardHat, Shield, ShoppingBag, WindIcon as Mask } from "lucide-react";

interface PPEIconProps {
  type: "helmet" | "vest" | "shoes" | "mask";
  isPresent: boolean;
}

export function PPEIcon({ type, isPresent }: PPEIconProps) {
  const icons = {
    helmet: HardHat,
    vest: Shield,
    shoes: ShoppingBag,
    mask: Mask,
  };

  const Icon = icons[type];
  const bgColor = isPresent ? "bg-emerald-500/20" : "bg-red-500/20";
  const borderColor = isPresent ? "border-emerald-500/50" : "border-red-500/50";
  const iconColor = isPresent ? "text-emerald-400" : "text-red-400";

  return (
    <div
      className={`${bgColor} ${borderColor} ${iconColor} border rounded p-1.5 inline-flex items-center justify-center`}
      title={`${type.charAt(0).toUpperCase() + type.slice(1)}: ${isPresent ? "Present" : "Missing"}`}
    >
      <Icon className="w-3.5 h-3.5" />
    </div>
  );
}
