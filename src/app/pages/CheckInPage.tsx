import { HardHat, Shirt, Footprints, Shield } from "lucide-react";
import { LiveVideoFeed } from "../components/LiveVideoFeed";
import { IdentityVerificationPanel } from "../components/IdentityVerificationPanel";
import { PPEChecklistItem } from "../components/PPEChecklistItem";
import { AccessStatusBanner } from "../components/AccessStatusBanner";
import { BodySilhouette } from "../components/BodySilhouette";

export function CheckInPage() {
  // Mock data - in real implementation, this would come from the AI system
  const workerData = {
    name: "Ahmad Rizki",
    employeeId: "EMP-2847",
    department: "Production Floor A",
    status: "verified" as const,
  };

  const ppeStatus = {
    helmet: "secured" as const,
    vest: "secured" as const,
    shoes: "secured" as const,
    mask: "missing" as const,
  };

  // Determine overall access status
  const hasAllPPE = Object.values(ppeStatus).every((status) => status === "secured");
  const accessStatus = hasAllPPE ? "granted" : "denied";
  const missingPPE = (Object.keys(ppeStatus) as Array<keyof typeof ppeStatus>).filter(
    (key) => ppeStatus[key] === "missing"
  );

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-b-2 border-slate-800 py-6 px-8">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-white text-4xl font-bold tracking-tight">
              SI-DEKSI K3
            </h1>
            <p className="text-slate-400 text-lg mt-1">
              Safety Check-In Terminal - Gate 01
            </p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-sm">Current Time</p>
            <p className="text-white text-2xl font-bold font-mono">
              {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-screen-2xl mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6 h-full">
            {/* Left Column - Video and Identity */}
            <div className="space-y-6">
              {/* Live Video Feed */}
              <LiveVideoFeed />

              {/* Identity Verification */}
              <IdentityVerificationPanel
                status={workerData.status}
                name={workerData.name}
                employeeId={workerData.employeeId}
                department={workerData.department}
              />
            </div>

            {/* Right Column - PPE Checklist and Guidance */}
            <div className="space-y-6">
              {/* PPE Checklist */}
              <div className="bg-slate-800/50 border-2 border-slate-700 rounded-2xl p-6">
                <div className="mb-6">
                  <h3 className="text-white font-bold text-2xl flex items-center gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    PPE STATUS
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">
                    Real-time equipment detection
                  </p>
                </div>

                <div className="space-y-3">
                  <PPEChecklistItem
                    icon={HardHat}
                    label="Safety Helmet"
                    status={ppeStatus.helmet}
                  />
                  <PPEChecklistItem
                    icon={Shirt}
                    label="Safety Vest"
                    status={ppeStatus.vest}
                  />
                  <PPEChecklistItem
                    icon={Footprints}
                    label="Safety Shoes"
                    status={ppeStatus.shoes}
                  />
                  <PPEChecklistItem
                    icon={Shield}
                    label="Face Mask"
                    status={ppeStatus.mask}
                  />
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-medium">
                      Compliance Progress
                    </span>
                    <span className="text-white font-bold text-lg">
                      {Math.round(
                        (Object.values(ppeStatus).filter((s) => s === "secured")
                          .length /
                          Object.values(ppeStatus).length) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        hasAllPPE ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                      style={{
                        width: `${
                          (Object.values(ppeStatus).filter((s) => s === "secured")
                            .length /
                            Object.values(ppeStatus).length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Visual Guidance */}
              {!hasAllPPE && <BodySilhouette missingPPE={missingPPE} />}

              {/* Instructions */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <h4 className="text-white font-bold text-lg mb-3">
                  Instructions
                </h4>
                <ol className="space-y-2 text-slate-300 text-sm">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span>Stand in front of the camera and look straight ahead</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span>Ensure all required PPE is visible</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span>Wait for verification to complete</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span>Proceed when "ACCESS GRANTED" is displayed</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Access Status Banner */}
      <AccessStatusBanner
        status={accessStatus}
        message={
          !hasAllPPE
            ? `Missing: ${missingPPE.map((item) => item.toUpperCase()).join(", ")}`
            : undefined
        }
      />
    </div>
  );
}
