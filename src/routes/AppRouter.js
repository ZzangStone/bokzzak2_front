import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound";
import DashboardPage from "../pages/DashboardPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
