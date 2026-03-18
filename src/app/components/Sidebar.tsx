import { Monitor, FileText, BarChart3, Shield, Scan } from "lucide-react";
import { Link, useLocation } from "react-router";

const navItems = [
  { id: "realtime", label: "Real-time", icon: Monitor, path: "/" },
  { id: "logs", label: "Logs", icon: FileText, path: "/logs" },
  { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-slate-900/50 border-r border-slate-700/50 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">SI-DEKSI K3</h1>
            <p className="text-slate-400 text-xs">AI Safety Monitor</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-700/50">
        <div className="text-xs text-slate-500">
          <p>Version 2.1.0</p>
          <p className="mt-1">© 2026 SI-DEKSI</p>
        </div>
      </div>
    </div>
  );
}