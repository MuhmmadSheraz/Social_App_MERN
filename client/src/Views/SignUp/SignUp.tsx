import React, { useState } from "react";
import "./index.css";
import SignupBg from "../../Assets/SignupBg.jpg";
import FormikField from "../../Components/FormikField";
import AuthButton from "../../Components/AuthButton";
import { Link,useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "./mutation";
const SignUp = () => {
  const history=useHistory()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result);
    },
    variables: {
      username: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    },
  });
  const signUpUser = () => {
    addUser();
    console.log(
      "Hello I am Clickeds",
      userName,
      email,
      password,
      confirmPassword
    );
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    history.push("/home")
  }
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
            <FormikField
              placeHolder="Your Name"
              type={"text"}
              data={userName}
              setData={setUserName}
            />
            <FormikField
              placeHolder="Your Email"
              type={"email"}
              data={email}
              setData={setEmail}
            />
            <FormikField
              placeHolder="Your Password"
              type={"password"}
              data={password}
              setData={setPassword}
            />
            <FormikField
              placeHolder="Confirm Password"
              type={"password"}
              data={confirmPassword}
              setData={setConfirmPassword}
            />
            <AuthButton name="Sign Up" click={signUpUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
