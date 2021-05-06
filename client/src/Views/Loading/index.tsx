import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router";

const Index = () => {
  const history = useHistory();
  useEffect(() => {
    localStorage.getItem("jwtToken")
      ? history.push("/home")
      : history.push("/");
  }, []);
  return (
    <div className="flex justify-center items-center h-screen  bg-gray-900">
      <h1 className="text-2xl flex justify-center items-center    text-red-600">
        Loading
      </h1>
    </div>
  );
};

export default Index;
