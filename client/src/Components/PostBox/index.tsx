import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
interface Props {
  text: string;
  likes: string;
  comments: string;
}
const PostBox = ({ text, likes, comments }: Props) => {
  return (
    <div className="p-2 shadow-2xl my-5 w-1/2 rounded-lg border-2 border-gray-400" >
      <div className="flex justify-between  items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
            height="12"
            className="mr-2"
            width="50"
            alt="userprofile"
          />
          <p>Hamza</p>
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
      <div className="flex justify-between items-center mt-5 mb-2 mx-10">
        <div className="flex justify-center items-center">
          <AiOutlineLike /> <span className="ml-2">Like</span>
        </div>
        <div className="flex justify-center items-center">
          <BiMessageDots />
          <span className="ml-2">Comments</span>
        </div>
      </div>
      {/* <p className="px-10 text-xl">{text}</p>
      <div className="px-10 flex justify-between">
        <div className="flex mt-10 ">
          <p>Likes: {likes}</p> <p className="mx-5">Comments: {comments} </p>
        </div>
      </div> */}
    </div>
  );
};

export default PostBox;
