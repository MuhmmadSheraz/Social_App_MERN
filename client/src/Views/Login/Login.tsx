import React, { useContext, useState } from "react";
import "./index.css";
import loginImage from "../../Assets/LoginBg.jpg";
import FormikField from "../../Components/FormikField";
import AuthButton from "../../Components/AuthButton";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./mutation";
import { GlobalContext } from "../../Context/GlobalState";
interface Props {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const { loginUser } = useContext(GlobalContext);
  const [email, setEmail] = useState<string>("gul@gmail.com");
  const [username, setUsername] = useState<string>("gul");
  const [password, setPassword] = useState<string>("123456");
  const [addUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { loginUser: userData } }) {
      loginUser(userData);
    },
    variables: {
      username,
      password,
      email,
    },
  });

  const login_User = async () => {
    await addUser();
    history.push("/loading");
  };

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
            <AuthButton name="Login" click={login_User} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
