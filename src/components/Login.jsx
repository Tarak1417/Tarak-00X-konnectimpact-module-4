import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password); // Save to context + localStorage
      navigate("/create");      // Redirect
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white mt-20">
      <p className="text-2xl font-medium m-auto">
        <span className="text-indigo-500">User</span> Login
      </p>
      <div className="w-full">
        <p>Email</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          type="email"
          required
        />
      </div>
      <div className="w-full">
        <p>Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          type="password"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
