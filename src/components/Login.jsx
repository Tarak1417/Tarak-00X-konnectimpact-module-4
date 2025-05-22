import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { login } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both fields");
      return;
    }
    login(email, password);
    navigate("/home");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
    >
      <p className="text-2xl font-medium m-auto text-center">
        <span className="text-indigo-500">User</span> Login
      </p>
      <div className="w-full">
        <p>Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          required
        />
      </div>
      <div className="w-full">
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          required
        />
      </div>
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 rounded-md mt-4">
        Login
      </button>
    </form>
  );
};

export default Login;
