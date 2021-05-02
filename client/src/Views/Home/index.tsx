import React from "react";
import CreatePostBox from "../../Components/CreatePostBox";
import PostBox from "../../Components/PostBox";
const index = () => {
  return (
    <div className="h-full  px-8 pt-5 pb-5 w-full">
      <CreatePostBox />
      <button className="bg-blue-500 px-5 py-3 block rounded text-white text-lg">
        Post
      </button>
      <PostBox text="I am post Text" likes="45" comments="10" />
    </div>
  );
};

export default index;
