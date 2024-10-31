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

const genderData = {
  labels: ["남성", "여성"],
  datasets: [
    {
      data: [55.5, 44.5],
      backgroundColor: ["#3F51B5", "#E91E63"],
    },
  ],
};

const ageData = {
  labels: ["10대 이하", "20대", "30대", "40대", "50대", "60대 이상"],
  datasets: [
    {
      data: [2.5, 17.2, 28.9, 25.6, 16.4, 9.5],
      backgroundColor: [
        "#FF9800",
        "#FF5722",
        "#FFCDD2",
        "#4CAF50",
        "#03A9F4",
        "#9C27B0",
      ],
    },
  ],
};

const RealTimePopulationRatio = () => {
  return (
    <div>
      <h3>실시간 인구 구성 비율</h3>
      <Doughnut data={genderData} />
      <Doughnut data={ageData} />
    </div>
  );
};

export default RealTimePopulationRatio;
