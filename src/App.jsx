// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useAppContext } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import CreateCampagin from "./components/CreateCampagin";
import ParternerCampagin from "./components/ParternerCampagin";
import Leaderboard from "./components/Leaderboard";


function App() {
  const { adminEmail } = useAppContext();

  return (
    
    <Router>
       <Sidebar />
      <Routes>
        
        {/* Public Route: Show login only if not logged in */}
        <Route
          path="/"
          element={!adminEmail ? <Login /> : <Navigate to="/home" />}
        />

        {/* Protected Route: Show dashboard only if logged in */}
        <Route
          path="/home"
          element={adminEmail ? <Home /> : <Navigate to="/" />}
        />

        {/* Catch-all: redirect to login */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/create" element={<CreateCampagin/>}/>
        <Route path="/partner" element={<ParternerCampagin/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
