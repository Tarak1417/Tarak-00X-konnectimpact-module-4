import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import Home from "./components/home";


const App = () => {
  const { adminEmail } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={adminEmail ? "/home" : "/login"} />} />
        <Route path="/login" element={!adminEmail ? <Login /> : <Navigate to="/home" />} />
        <Route path="/home" element={adminEmail ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
