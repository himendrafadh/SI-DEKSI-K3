import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock data for the last 30 days
const generateComplianceData = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Generate realistic compliance data with some variation
    const compliance = 85 + Math.random() * 15;
    const violations = Math.floor((100 - compliance) * 0.4);
    
    data.push({
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      compliance: parseFloat(compliance.toFixed(1)),
      violations: violations,
      workers: Math.floor(35 + Math.random() * 15),
    });
  }
  
  return data;
};

const data = generateComplianceData();

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-white font-semibold mb-2">{payload[0].payload.date}</p>
        <p className="text-emerald-400 text-sm">
          Compliance: {payload[0].value}%
        </p>
        <p className="text-amber-400 text-sm">
          Violations: {payload[1].value}
        </p>
        <p className="text-blue-400 text-sm">
          Workers: {payload[0].payload.workers}
        </p>
      </div>
    );
  }
  return null;
};

export function ComplianceTrendChart() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-white font-semibold text-lg">Compliance Trends - Last 30 Days</h3>
        <p className="text-slate-400 text-sm mt-1">Track safety compliance and violation patterns over time</p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="date" 
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
            label={{ value: 'Compliance %', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="compliance" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
            name="Compliance Rate (%)"
          />
          <Line 
            type="monotone" 
            dataKey="violations" 
            stroke="#f59e0b" 
            strokeWidth={3}
            dot={{ fill: '#f59e0b', r: 4 }}
            activeDot={{ r: 6 }}
            name="Violations"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
