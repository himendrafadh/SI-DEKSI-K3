import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const departmentData = [
  { department: "Production", compliance: 96.5, violations: 8 },
  { department: "Warehouse", compliance: 94.2, violations: 12 },
  { department: "Maintenance", compliance: 91.8, violations: 18 },
  { department: "Logistics", compliance: 89.3, violations: 22 },
  { department: "Quality Control", compliance: 97.8, violations: 5 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-white font-semibold mb-2">{payload[0].payload.department}</p>
        <p className="text-emerald-400 text-sm">
          Compliance: {payload[0].value}%
        </p>
        <p className="text-red-400 text-sm">
          Violations: {payload[0].payload.violations}
        </p>
      </div>
    );
  }
  return null;
};

export function DepartmentComparisonChart() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-white font-semibold text-lg">Department Performance Comparison</h3>
        <p className="text-slate-400 text-sm mt-1">Compare compliance rates across different departments</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={departmentData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            type="number"
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
            domain={[0, 100]}
          />
          <YAxis 
            dataKey="department"
            type="category"
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
            width={120}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar 
            dataKey="compliance" 
            fill="#10b981"
            name="Compliance Rate (%)"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
