import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useAppContext } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import CreateCampagin from "./components/CreateCampagin";
import ParternerCampagin from "./components/ParternerCampagin";
import Leaderboard from "./components/Leaderboard";

const AppRoutes = () => {
  const { adminEmail } = useAppContext();
  const location = useLocation();

  // Hide Sidebar on login page
  const hideSidebar = location.pathname === "/";

  return (
    <>
      {!hideSidebar && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={!adminEmail ? <Login /> : <Navigate to="/create" />}
        />
        <Route
          path="/home"
          element={adminEmail ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/create" element={<CreateCampagin />} />
        <Route path="/partner" element={<ParternerCampagin />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
