import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../Pages/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
