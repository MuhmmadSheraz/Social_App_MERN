import React from "react";
import "./index.css";
import SignupBg from "../../Assets/SignupBg.jpg";
import FormikField from "../../Components/FormikField";
import AuthButton from "../../Components/AuthButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mainsignUp_Wrapper w-screen bg-gray-100 flex justify-center items-center">
      <div className="w-3/4 shadow-xl bg-white rounded-lg p-5 signUp_box flex flex-row-reverse justify-between">
        <div className="text-center w-1/2 flex justify-center items-center flex-col">
          <img src={SignupBg} className="signUpImage" alt="signUpImage" />
          <Link to="/">Already Have An Account ?</Link>
        </div>
        <div className=" w-1/2 flex justify-center  flex-col ml-5">
          <div>
            <h1 className="font-extrabold tracking-widest text-3xl text-left  ">
              Sign Up
            </h1>
            <FormikField placeHolder="Your Name" type={"text"} />
            <FormikField placeHolder="Your Email" type={"email"} />
            <FormikField placeHolder="Your Password" type={"password"} />
            <AuthButton name="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
