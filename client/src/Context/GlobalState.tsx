import { useReducer, createContext } from "react";
import Reducer from "./Reducer";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null,
};

if (localStorage.getItem("jwtToken")) {
  const decodedToken: any = jwtDecode(localStorage.getItem("jwtToken") || "{}");
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState.user = decodedToken;
  }
}

export const GlobalContext = createContext<any>(initialState);
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const loginUser = (userData: any) => {
    console.log(userData)
    localStorage.setItem("jwtToken", userData.token);
    return dispatch({
      type: "LOGIN_USER",
      payload: userData,
    });
  };
  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    return dispatch({
      type: "LOGOUT_USER",
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        loginUser,
        logoutUser,
        user: state.user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
