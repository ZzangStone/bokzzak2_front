import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
