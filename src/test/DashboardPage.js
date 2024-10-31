import React from "react";
import Sidebar from "./Dashboard/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Map from "./Dashboard/Map";

function DashboardPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 왼쪽 사이드바 */}
      <Sidebar />

      {/* 오른쪽 대시보드 및 지도 */}
      <div style={{ flex: 1, display: "flex" }}>
        <div
          style={{ flex: 1, overflow: "auto", borderRight: "1px solid #ccc" }}
        >
          <Dashboard />
        </div>

        <div style={{ flex: 2, overflow: "hidden" }}>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
