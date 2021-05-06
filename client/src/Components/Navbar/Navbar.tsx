import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";
import "./index.css";
const Index = () => {
  const { logoutUser } = useContext(GlobalContext);
  const history = useHistory();

  const logout = () => {
    logoutUser();
    history.push("/loading");
  };
  return (
    <div className="flex justify-between md:px-10 px-3 py-10 bg-gray-100 navBar_wrapper h-custom_vh1">
      <div className="items-center flex justify-center">
        <h1 className="cursor-pointer font-bold text-xl">
          {"<"}
          {localStorage.getItem("username")
            ? localStorage.getItem("username")?.toUpperCase()
            : "Social Circle"}
          {" />"}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h4 className="mx-2 sm:text-xs  md:text-lg  md:mx-5 cursor-pointer">
          About Me
        </h4>
        <h4 className="mx-2 sm:text-xs  md:text-lg md:mx-5 cursor-pointer">
          Contact
        </h4>
        {!localStorage.getItem("jwtToken") && (
          <h4 className="mx-2 sm:text-xs  md:text-lg md:mx-5 cursor-pointer">
            <NavLink to="/sign-up">Sign Up</NavLink>
          </h4>
        )}
        {localStorage.getItem("jwtToken") ? (
          <h4
            className="sm:px-2 sm:text-xs  md:text-lg md:mx-5 cursor-pointer"
            onClick={() => logout()}
          >
            Logout
          </h4>
        ) : (
          <h4 className="sm:px-2 sm:text-xs  md:text-lg md:mx-5 cursor-pointer">
            <NavLink to="/">Login </NavLink>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Index;
