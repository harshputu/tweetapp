import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const [loginInput, setLoginInput] = useState({});

  const loginRequest = (input) => {
    const {loginId, password} = input;
    return axios.get(`http://localhost:8080/authenticate/${loginId}/${password}`);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await loginRequest(loginInput);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      setIsLoggedIn(true);
      navigate("/");
      setLoginInput({ loginId: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = async () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loginInput,
        setLoginInput,
        loginRequest,
        loginHandler,
        logoutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
