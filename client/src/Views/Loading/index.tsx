import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router";

const Index = () => {
  const history = useHistory();
  const token = localStorage.getItem("jwtToken");
  useEffect(() => {
    token ? history.push("/home") : history.push("/");
  }, [token]);
  return (
    <div className="flex justify-center items-center h-screen  bg-gray-900">
      <h1 className="text-2xl flex justify-center items-center    text-red-600">
        Loading
      </h1>
    </div>
  );
};

export default Index;
