import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// 필요한 요소들을 등록합니다.
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const timeData = {
  labels: ["0시", "6시", "현재", "18시", "24시"],
  datasets: [
    {
      label: "인구 수",
      data: [10000, 15000, 20000, 22000, 18000],
      backgroundColor: ["#4CAF50", "#FFEB3B", "#FF9800", "#D50000", "#4CAF50"],
    },
    {
      label: "동일 요일 평균",
      type: "line",
      data: [12000, 14000, 18000, 21000, 19000],
      borderColor: "#3F51B5",
      borderWidth: 2,
    },
  ],
};

const PopulationOverTime = () => {
  return (
    <div>
      <h3>시간대별 인구 수</h3>
      <Bar data={timeData} />
    </div>
  );
};

export default PopulationOverTime;
