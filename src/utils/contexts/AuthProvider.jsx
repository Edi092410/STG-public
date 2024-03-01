import { createContext, useContext, useState } from "react";
const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  const logOut = () => {
    localStorage.clear();
    setAuth(false);
  };
  const storedTime = JSON.parse(localStorage.getItem("firstDate"));
  if (storedTime) {
    const currentTime = new Date().getTime();
    // Check if the data is older than one hour (3600000 milliseconds)
    if (currentTime - storedTime > 3600000) {
      // Data is older than one hour, remove it
      logOut();
    }
  }
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
