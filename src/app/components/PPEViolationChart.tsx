import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const violationData = [
  { name: "Helmet", violations: 45, percentage: 35 },
  { name: "Vest", violations: 28, percentage: 22 },
  { name: "Shoes", violations: 32, percentage: 25 },
  { name: "Mask", violations: 23, percentage: 18 },
];

const COLORS = {
  Helmet: "#ef4444",
  Vest: "#f59e0b",
  Shoes: "#f97316",
  Mask: "#dc2626",
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-white font-semibold mb-2">{payload[0].payload.name}</p>
        <p className="text-red-400 text-sm">
          Violations: {payload[0].value}
        </p>
        <p className="text-slate-400 text-sm">
          {payload[0].payload.percentage}% of total violations
        </p>
      </div>
    );
  }
  return null;
};

export function PPEViolationChart() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-white font-semibold text-lg">Most Frequently Violated PPE</h3>
        <p className="text-slate-400 text-sm mt-1">Identify which equipment is most often forgotten or missing</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={violationData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8"
            style={{ fontSize: '14px', fontWeight: '500' }}
          />
          <YAxis 
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
            label={{ value: 'Violations', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar 
            dataKey="violations" 
            name="Total Violations"
            radius={[8, 8, 0, 0]}
          >
            {violationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {/* Violation Summary */}
      <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-700/50">
        {violationData.map((item) => (
          <div key={item.name} className="text-center">
            <div 
              className="w-3 h-3 rounded-full mx-auto mb-2" 
              style={{ backgroundColor: COLORS[item.name as keyof typeof COLORS] }}
            ></div>
            <p className="text-slate-400 text-xs mb-1">{item.name}</p>
            <p className="text-white font-semibold">{item.violations}</p>
            <p className="text-slate-500 text-xs">{item.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
