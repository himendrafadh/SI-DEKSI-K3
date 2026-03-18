import { createBrowserRouter } from "react-router";
import { RealTimePage } from "./pages/RealTimePage";
import { LogsPage } from "./pages/LogsPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { CheckInPage } from "./pages/CheckInPage";
import { Sidebar } from "./components/Sidebar";
import { StatusBar } from "./components/StatusBar";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-['Inter',sans-serif]">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <StatusBar />
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: RealTimePage },
      { path: "logs", Component: LogsPage },
      { path: "analytics", Component: AnalyticsPage },
    ],
  },
  // Standalone check-in kiosk page (no sidebar/statusbar layout)
  {
    path: "/check-in",
    Component: CheckInPage,
  },
]);