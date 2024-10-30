import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

function Dashboard() {
  // 시간대별 인구 수 데이터 예시
  const populationData = [
    { time: '00:00', population: 200 },
    { time: '06:00', population: 300 },
    { time: '12:00', population: 500 },
    { time: '18:00', population: 700 },
    { time: '20:00', population: 600 },
    { time: '22:00', population: 400 },
    { time: '24:00', population: 100 }
  ];

  // 남녀 비율 데이터 예시
  const genderRatio = [
    { name: '남성', value: 45 },
    { name: '여성', value: 55 },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

  return (
    <div style={{ padding: '20px' }}>
      <h2>대시보드</h2>

      {/* 시간대별 인구 수 막대 그래프 */}
      <h3>시간대별 인구 수</h3>
      <BarChart width={500} height={300} data={populationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="population" fill="#82ca9d" />
      </BarChart>

      {/* 남녀 비율 원형 그래프 */}
      <h3>남녀 비율</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={genderRatio}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#82ca9d"
          label
        >
          {genderRatio.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Dashboard;
