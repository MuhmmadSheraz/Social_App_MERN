import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import Comment from "../Comment";
interface Props {
  text: string;
  likes: string;
  comments: string;
}
const PostBox = ({ text, likes, comments }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const like = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="p-2 shadow-xl my-5 lg:w-1/2 md:w-3/4 rounded-lg border-2 border-gray-400">
      <div className="flex justify-between  items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
            height="12"
            className="mr-2"
            width="50"
            alt="userprofile"
          />
          <div>
            <p>Hamza</p>
            <p>12/12/50 at 6.00PM</p>
          </div>
        </div>
        <div>
          <BsThreeDots size={25} />
        </div>
      </div>
      <hr className="mb-3 mt-2" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi,
        eveniet neque iste nisi delectus itaque adipisci aperiam id facere.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi,
        eveniet neque iste nisi delectus itaque adipisci aperiam id facere.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi,
        eveniet neque iste nisi delectus itaque adipisci aperiam id facere.
      </p>
      <div className="flex justify-between items-center mt-5 mb-2 mx-8 ">
        <div className="flex justify-center items-center">
          <span className="ml-2">21 Likes</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="ml-2">3 Comments</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center mt-5 mb-2 mx-10">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={like}
        >
          <AiFillLike fill={isLiked ? "#2078F4" : "gray"} className="mr-2" />
          <span className={isLiked ? "colorBlue" : "gray"}>Like</span>
        </div>
        <div className="flex justify-center items-center">
          <BiMessageDots />
          <span className="ml-2">Comments</span>
        </div>
      </div>
      <hr />
      <div className="mt-2">
        <input
          placeholder="Write a Comment"
          className="w-full rounded-md shadow-md py-2 px-4 border outline-none text-lg"
        />
      </div>
      <div>
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default PostBox;
