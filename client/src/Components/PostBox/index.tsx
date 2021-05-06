import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { GlobalContext } from "../../Context/GlobalState";
import Comment from "../Comment";
import { commentType, postType } from "../../Types/type";
import { useMutation } from "@apollo/client";
import { LIKE_POST } from "./mutation";
import CustomModal from "../CustomModal/Index";
interface Props {
  postData: postType;
}
const PostBox = ({ postData }: Props) => {
  const {
    body,
    comments,
    createdAt,
    likesCount,
    commentsCount,
    id,
    likes,
    username,
  } = postData;
  const {
    user: { username: name },
  } = useContext(GlobalContext);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [likePost, { loading }] = useMutation(LIKE_POST, {
    variables: { postId: id, username: name },
  });

  useEffect(() => {
    likes.some((x) => {
      return x.username === name ? setIsLiked(true) : setIsLiked(false);
    });
  }, [likesCount, likes]);

  const like = async () => {
    try {
      await likePost();
      setIsLiked(!isLiked);
    } catch (error) {
      return error.message;
    }
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
            <p>{username}</p>
            <p>{moment(createdAt).fromNow()}</p>
          </div>
        </div>
        {username === name && (
          <div>
            <BsThreeDots
              size={25}
              onClick={() => setOpenModal(true)}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
      <hr className="mb-3 mt-2" />
      <p>{body}</p>
      <div className="flex justify-between items-center mt-5 mb-2 mx-8 ">
        <div className="flex justify-center items-center">
          <span className="ml-2">{likesCount} Likes</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="ml-2">{commentsCount} Comments</span>
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
        {comments?.map((commentData: commentType, index) => {
          return <Comment commentData1={commentData} key={commentData.id} />;
        })}
      </div>
      {<CustomModal openModal={openModal} setOpenModal={setOpenModal} id={id} />}
    </div>
  );
};

export default PostBox;
