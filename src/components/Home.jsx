import React from "react";
import { useAppContext } from "../context/AppContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 50 },
  { name: "Mar", users: 40 },
  { name: "Apr", users: 70 },
];

const Home = () => {
  const { adminEmail, logout } = useAppContext();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-600 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li>Overview</li>
          <li>Reports</li>
          <li>Settings</li>
          <li className="cursor-pointer text-red-200" onClick={logout}>Logout</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">Welcome, {adminEmail}</h1>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Home;
