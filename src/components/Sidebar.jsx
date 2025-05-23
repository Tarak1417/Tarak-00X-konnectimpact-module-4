import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50 bg-white p-2 border border-gray-300 rounded-lg shadow-lg flex space-x-2 text-sm">
      
      <div className="flex items-center">
        <input
          type="radio"
          name="options"
          id="dashboard"
          className="hidden peer"
          checked={pathname === "/home"}
          onChange={() => navigate("/home")}
        />
        <label
          htmlFor="dashboard"
          className="cursor-pointer rounded py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-indigo-600 peer-checked:text-white"
        >
          Dashboard
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="radio"
          name="options"
          id="html"
          className="hidden peer"
          checked={pathname === "/create"}
          onChange={() => navigate("/create")}
        />
        <label
          htmlFor="html"
          className="cursor-pointer rounded py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-indigo-600 peer-checked:text-white"
        >
          Create Campaign
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="radio"
          name="options"
          id="css"
          className="hidden peer"
          onChange={() => navigate("/partner")}
          checked={pathname === "/partner"}
        />
        <label
          htmlFor="css"
          className="cursor-pointer rounded py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-indigo-600 peer-checked:text-white"
        >
          Partner Campaign
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="radio"
          name="options"
          id="react"
          className="hidden peer"
          onChange={() => navigate("/leaderboard")}
          checked={pathname === "/leaderboard"}
        />
        <label
          htmlFor="react"
          className="cursor-pointer rounded py-2 px-4 text-gray-500 transition-colors duration-200 peer-checked:bg-indigo-600 peer-checked:text-white"
        >
          Leaderboard
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
