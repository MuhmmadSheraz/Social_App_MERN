import React from "react";

interface Props {
  text: string;
  likes: string;
  comments: string;
}
const PostBox = ({ text, likes, comments }: Props) => {
  return (
    <div className="py-5 bg-primary my-5 w-1/2 rounded-lg">
      <p className="px-10 text-xl">{text}</p>
      <div className="px-10 flex justify-between">
        <div className="flex mt-10 ">
          <p>Likes: {likes}</p> <p className="mx-5">Comments: {comments} </p>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
