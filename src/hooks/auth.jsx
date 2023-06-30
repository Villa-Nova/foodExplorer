import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

//My context.
//Step to the AuthContext function.
export const AuthContext = createContext({});

//Receive routes in main.jsx.
function AuthProvider({ children }) {
  //store user data.
  const [ data, setData ] = useState({});

  //Login fcuntion.
  async function signIn({ email, password }) {
    try {  
      //send the data to the backend.
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      //save in localStorage.
      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodExplorer:token", token);

      //Insert the token for the person to be authenticated in the application.
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar a ação.");
      };
    };
  };

  function signOut() {
    const user = localStorage.removeItem("@foodExplorer:user");
    const token = localStorage.removeItem("@foodExplorer:token");

    setData({});
  };

  //Keep user logged in with localStorage information.
  //Access the date status.
  useEffect(() => {
    //Access localStorage.
    const user = localStorage.getItem("@foodExplorer:user");
    const token = localStorage.getItem("@foodExplorer:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    };    
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      user: data.user, 
    }}>
      { children }
    </AuthContext.Provider>
  );
};

//Using the AuthContext to create a hook.
function useAuth() {
  const context = useContext(AuthContext);
  return context;
};

export {
  AuthProvider,
  useAuth,
};