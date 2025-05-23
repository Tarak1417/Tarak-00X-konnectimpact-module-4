import React from "react";
import { useAppContext } from "../context/AppContext";
import BarChartComponent from "./BarChartComponent";


const Home = () => {
  const { adminEmail, logout } = useAppContext();

  return (
    <div>
    

      <div className="p-8 flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-charcoalText">
          Welcome, {adminEmail}
        </h1>
        <button onClick={logout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Logout
        </button>
      </div>

      <p className="text-trustBlue">This is charcoal text color.</p>
      <BarChartComponent />
    </div>
  );
};

export default Home;
