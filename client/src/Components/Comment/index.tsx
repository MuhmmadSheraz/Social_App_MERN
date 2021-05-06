import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { TiDeleteOutline } from "react-icons/ti";
import { DELETE_COMMENT } from "../PostBox/mutation";
import { commentType } from "../../Types/type";
import { useMutation } from "@apollo/client";
interface Props {
  commentData1: commentType;
  postId: string;
}
const CommentBox = ({ commentData1, postId }: Props) => {
  const { body, username, id } = commentData1;
  const [deleteComment, {}] = useMutation(DELETE_COMMENT, {
    variables: {
      postId,
      username,
      commentId: id,
    },
  });
  const {
    user: { username: name },
  } = useContext(GlobalContext);

  const deleteCommentPost = async () => {
    try {
      await deleteComment();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex  items-center mt-4 w-5/6">
      <img
        className="rounded md:w-20 sm:w-9 w-14"
        src="https://blog.hubspot.com/hubfs/How%20to%20Edit%20%26%20Customize%20User%20Roles%20in%20WordPress.jpeg"
        alt="user profile"
      />
      <p className="ml-1 sm:text-sm bg-gray-300  rounded sm:px-4 px-2 py-2 text-xs">
        <div className="flex items-center justify-between">
          <p>
            <b className="block">{username}</b>
          </p>
          {name === username && (
            <TiDeleteOutline
              className="cursor-pointer ml-5"
              onClick={deleteCommentPost}
            />
          )}
        </div>
        {body}
      </p>
    </div>
  );
};

export default CommentBox;
