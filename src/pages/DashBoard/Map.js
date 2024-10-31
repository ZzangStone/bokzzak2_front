import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";

// 데이터 필터링을 위한 날짜와 시간 선택 범위 설정
const years = ["2023", "2024"];
const months = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const days = Array.from({ length: 31 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
// 10분 간격의 분 설정
const minutes = ["00", "10", "20", "30", "40", "50"];

function Map() {
  const [routes, setRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [maxPopulation, setMaxPopulation] = useState(0);

  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("05");
  const [selectedDay, setSelectedDay] = useState("30");
  const [selectedHour, setSelectedHour] = useState("16");
  const [selectedMinute, setSelectedMinute] = useState("00");

  const [currentMinute, setCurrentMinute] = useState(0); // 타임바의 현재 시간 (분)
  const [isPlaying, setIsPlaying] = useState(false); // 타임바 자동 재생 여부

  useEffect(() => {
    // CSV 파일 읽기 및 파싱
    Papa.parse("/세종대_출도착_경로_총유동인구.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const parsedData = result.data
          .map((row) => ({
            date: row.출발시간, // 일자 필드
            start: [parseFloat(row.노드Y좌표), parseFloat(row.노드X좌표)],
            end: [parseFloat(row.다음노드Y좌표), parseFloat(row.다음노드X좌표)],
            population: parseInt(row.총유동인구, 10),
          }))
          .filter(
            (route) =>
              !isNaN(route.start[0]) &&
              !isNaN(route.start[1]) &&
              !isNaN(route.end[0]) &&
              !isNaN(route.end[1]) &&
              !isNaN(route.population)
          );
        setRoutes(parsedData);
      },
    });
  }, []);

  // 타임바의 현재 시간에 맞춰 데이터를 필터링
  useEffect(() => {
    const selectedDateTime = `${selectedYear}-${selectedMonth}-${selectedDay} ${selectedHour}:${String(
      currentMinute
    ).padStart(2, "0")}`;
    const filteredData = routes.filter((route) =>
      route.date.startsWith(selectedDateTime)
    );
    setFilteredRoutes(filteredData);
  }, [currentMinute, routes]);

  // 유동 인구수에 따른 색상 결정 함수
  const getColorByPopulation = (population) => {
    if (population > 13.46) return "red"; // 혼잡한 경우
    if (population > 6.87) return "orange"; // 보통 혼잡 상태
    return "green"; // 여유로운 상태
  };

  // 타임바 자동 재생
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentMinute((prev) => {
          if (prev >= 110) {
            clearInterval(interval);
            return 0;
          }
          return prev + 10; // 10분씩 증가
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // 타임바 컨트롤러
  const togglePlay = () => setIsPlaying(!isPlaying);
  const resetTime = () => {
    setIsPlaying(false);
    setCurrentMinute(0);
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%", flex: 2.5 }}
    >
      {/* 날짜 및 시간 선택 Select Box와 입력 버튼 */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1000,
          display: "flex",
          gap: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          style={{ padding: "5px", fontSize: "14px" }}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          style={{ padding: "5px", fontSize: "14px" }}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          style={{ padding: "5px", fontSize: "14px" }}
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
          style={{ padding: "5px", fontSize: "14px" }}
        >
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>

        <select
          value={selectedMinute}
          onChange={(e) => setSelectedMinute(e.target.value)}
          style={{ padding: "5px", fontSize: "14px" }}
        >
          {minutes.map((minute) => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>

        <button
          onClick={togglePlay}
          style={{
            padding: "5px 10px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: isPlaying ? "#dc3545" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {isPlaying ? "정지" : "재생"}
        </button>
        <button
          onClick={resetTime}
          style={{
            padding: "5px 10px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: "#6c757d",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          초기화
        </button>
      </div>

      {/* 지도 */}
      <MapContainer
        center={[37.5509, 127.0738]}
        zoom={15}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 필터링된 경로 표시 */}
        {filteredRoutes.map((route, index) => (
          <Polyline
            key={index}
            positions={[route.start, route.end]}
            color={getColorByPopulation(route.population)} // 유동인구수에 따라 색상 결정
            weight={Math.min(10, 2 + route.population / 100)} // 유동인구수에 따라 경로 두께 조정
          />
        ))}

        {/* 타임바 - 지도 위에 표시 */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "80%",
            zIndex: 1000, // 지도 요소 위에 표시
          }}
        >
          <div
            style={{
              width: "100%",
              height: "10px",
              backgroundColor: "#e9ecef",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(currentMinute / 120) * 100}%`,
                height: "100%",
                backgroundColor: "#007bff",
                transition: "width 1s linear",
              }}
            ></div>
          </div>
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            {`${selectedHour}:${String(currentMinute).padStart(2, "0")}`}
          </div>
        </div>
      </MapContainer>
    </div>
  );
}

export default Map;
