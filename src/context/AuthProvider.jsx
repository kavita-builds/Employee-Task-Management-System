import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utlis/localstorage";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Initialize from localStorage
  useEffect(() => {
    const data = getLocalStorage();
    setEmployees(data);
  }, []);

  // Keep localStorage in sync
  useEffect(() => {
    setLocalStorage(employees);
  }, [employees]);

  return (
    <AuthContext.Provider value={{ employees, setEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
