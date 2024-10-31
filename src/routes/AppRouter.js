import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound";
import DashboardPage from "../test/DashboardPage";
import Dashboard from "../pages/DashBoard/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Main />} />
      <Route path="/testdash" element={<DashboardPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
