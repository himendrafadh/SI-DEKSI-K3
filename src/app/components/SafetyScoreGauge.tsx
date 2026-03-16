import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp, Award } from "lucide-react";

interface SafetyScoreGaugeProps {
  score: number;
}

export function SafetyScoreGauge({ score }: SafetyScoreGaugeProps) {
  const data = [
    { name: "Score", value: score },
    { name: "Remaining", value: 100 - score },
  ];

  // Determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "#10b981"; // Emerald (Excellent)
    if (score >= 75) return "#3b82f6"; // Blue (Good)
    if (score >= 60) return "#f59e0b"; // Amber (Fair)
    return "#ef4444"; // Red (Poor)
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Good";
    if (score >= 60) return "Fair";
    return "Needs Improvement";
  };

  const scoreColor = getScoreColor(score);
  const scoreLabel = getScoreLabel(score);

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-white font-semibold text-lg">Overall Safety Score</h3>
        <p className="text-slate-400 text-sm mt-1">Facility-wide safety performance rating</p>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={110}
              paddingAngle={0}
              dataKey="value"
            >
              <Cell fill={scoreColor} />
              <Cell fill="#1e293b" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Score Display in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-8">
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-white">{score}</span>
            <span className="text-2xl text-slate-400">/100</span>
          </div>
          <div 
            className="px-4 py-1.5 rounded-full text-sm font-semibold inline-block"
            style={{ 
              backgroundColor: `${scoreColor}20`,
              color: scoreColor,
              border: `1px solid ${scoreColor}50`
            }}
          >
            {scoreLabel}
          </div>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700/50">
        <div className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
          <div className="bg-emerald-500/20 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-slate-400 text-xs">Trend</p>
            <p className="text-white font-semibold">↑ 3.2%</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
          <div className="bg-blue-500/20 p-2 rounded-lg">
            <Award className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="text-slate-400 text-xs">Industry Avg</p>
            <p className="text-white font-semibold">82.5</p>
          </div>
        </div>
      </div>

      {/* Score Legend */}
      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-slate-400">90-100: Excellent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-slate-400">75-89: Good</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-slate-400">60-74: Fair</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-slate-400">0-59: Poor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
