import React from "react";
import { useAppContext } from "../context/AppContext";
import BarChartComponent from "./BarChartComponent";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { adminEmail, logout } = useAppContext();
  const navigate=useNavigate()

  return (
    <div>
    

      <div className=" flex flex-row justify-between items-center p-8">
<h1 className="text-xl font-bold" style={{ color: "#2196F3" }}>
  Konnect
</h1>
 
        <div className="flex items-center ">
           <button
            onClick={() => navigate("/create")}
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Create new
          </button>
        <h1 className="text-sm font-bold text-charcoalText ml-5">
         {adminEmail}
        </h1>
        <button onClick={logout} className="ml-5 px-4 py-2  text-white rounded" style={{background:"#4CAF50"}}>
          Logout
        </button>
        </div>
      </div>

     
      <BarChartComponent />
    </div>
  );
};

export default Home;
