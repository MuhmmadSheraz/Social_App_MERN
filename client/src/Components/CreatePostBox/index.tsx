import React from "react";
import "../../Css/global.css";
const index = () => {
  return (
    <textarea
      placeholder="Whats Going On?"
      rows={5}
      className="border-gray-400 border  createPostBox w-2/3 px-10 py-5  shadow-md  rounded-lg outline-none text-lg  resize-none"
    />
  );
};

export default index;