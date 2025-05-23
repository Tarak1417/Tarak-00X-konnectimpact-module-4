import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { id: "dashboard", label: "Dashboard", path: "/home" },
    { id: "create", label: "Create Campaign", path: "/create" },
    { id: "partner", label: "Partner Campaign", path: "/partner" },
    { id: "leaderboard", label: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 bg-white p-2 border border-gray-300 rounded-xl shadow-md flex flex-wrap justify-center gap-2 text-xs sm:text-sm md:text-base w-[90%] sm:w-auto overflow-x-auto">
      {tabs.map((tab) => (
        <div key={tab.id} className="flex items-center">
          <input
            type="radio"
            name="options"
            id={tab.id}
            className="hidden peer"
            checked={pathname === tab.path}
            onChange={() => navigate(tab.path)}
          />
          <label
            htmlFor={tab.id}
            className="cursor-pointer rounded-lg py-2 px-3 sm:px-4 text-gray-500 whitespace-nowrap transition-colors duration-200 peer-checked:bg-indigo-600 peer-checked:text-white"
          >
            {tab.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
