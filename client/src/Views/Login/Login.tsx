import React from "react";
import "./index.css";
import loginImage from "../../Assets/LoginBg.jpg";
import FormikField from "../../Components/FormikField";
import AuthButton from "../../Components/AuthButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mainLogin_Wrapper w-screen bg-gray-100 flex justify-center items-center">
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
            <FormikField placeHolder="Your Email" type={"email"} />
            <FormikField placeHolder="Your Password" type={"password"} />
            <AuthButton name="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
