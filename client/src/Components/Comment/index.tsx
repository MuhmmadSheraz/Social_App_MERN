import React from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { commentType } from "../../Types/type";
interface Props {
  commentData1: commentType;
}
const index = ({ commentData1 }: Props) => {
  const { body, username, id } = commentData1;

  return (
    <div className="flex  items-center mt-4">
      <img
        className="rounded md:w-20 sm:w-9 w-14"
        src="https://blog.hubspot.com/hubfs/How%20to%20Edit%20%26%20Customize%20User%20Roles%20in%20WordPress.jpeg"
        alt="user profile"
      />
      <p className="ml-1 sm:text-sm bg-gray-300  rounded sm:px-4 px-2 py-2 text-xs">
        <b className="block">{username}</b>
        {body}
      </p>
    </div>
  );
};

export default index;
