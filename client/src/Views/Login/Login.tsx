import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import loginImage from "../../Assets/LoginBg.jpg";
import FormikField from "../../Components/FormikField";
import AuthButton from "../../Components/AuthButton";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./mutation";
import Swal from 'sweetalert2'

import { GlobalContext } from "../../Context/GlobalState";
interface Props {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const { loginUser } = useContext(GlobalContext);
  const [username, setUsername] = useState<string>("gul");
  const [password, setPassword] = useState<string>("123456");

  const [addUser, { loading, error }] = useMutation(LOGIN_USER, {
    update(_, { data: { loginUser: userData } }) {
      loginUser(userData);
      console.log(error);
    },

    variables: {
      username,
      password,
      email: "ell",
    },
  });

  const login_User = async () => {
    try {
      await addUser();
      history.push("/loading");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  useEffect(() => {
    localStorage.getItem("jwtToken") && history.push("/home");
  }, []);
  return (
    <div className="mainLogin_Wrapper w-full h-full bg-gray-100 flex justify-center items-center">
      <div className="w-3/4 shadow-xl bg-white rounded-lg p-5 login_box flex justify-between">
        <div className="text-center w-1/2 flex justify-center items-center flex-col">
          <img src={loginImage} className="loginImage" alt="loginImage" />
          <Link to="/sign-up">Create An Acconut !</Link>
        </div>
        <div className=" w-1/2 flex justify-center  flex-col">
          <div>
            <h1 className="font-extrabold tracking-widest text-3xl text-left  ">
              Login
            </h1>

            <FormikField
              placeHolder="Your UserName"
              type={"text"}
              data={username}
              setData={setUsername}
            />
            {/* <FormikField
              placeHolder="Your Email"
              type={"email"}
              data={email}
              setData={setEmail}
            /> */}
            <FormikField
              placeHolder="Your Password"
              type={"password"}
              data={password}
              setData={setPassword}
            />
            <AuthButton name="Login" click={login_User} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
