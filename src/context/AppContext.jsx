// context/AppContext.jsx
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [adminEmail, setAdminEmail] = useState(localStorage.getItem("adminEmail") || null);
  const [password, setPassword] = useState(localStorage.getItem("password") || null);

  const login = (email, pass) => {
    localStorage.setItem("adminEmail", email);
    localStorage.setItem("password", pass);
    setAdminEmail(email);
    setPassword(pass);
  };

  const logout = () => {
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("password");
    setAdminEmail(null);
    setPassword(null);
  };

  return (
    <AppContext.Provider value={{ adminEmail, password, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
