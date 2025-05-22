// components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-6 space-y-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li className="hover:text-indigo-400 cursor-pointer">Home</li>
        <li className="hover:text-indigo-400 cursor-pointer">Reports</li>
        <li className="hover:text-indigo-400 cursor-pointer">Analytics</li>
        <li className="hover:text-indigo-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
