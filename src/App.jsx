import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Basket from "./Pages/Basket";
import Dashboard from "./Pages/Dashboard";
import Filials from "./Pages/Filials";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/filials" element={<Filials />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
