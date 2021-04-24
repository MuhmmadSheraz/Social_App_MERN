import React from "react";

interface Props {
  type: string;
  placeHolder: string;
}
const index = ({ type, placeHolder }: Props) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeHolder}
        className=" border-b-2 outline-none  w-3/4 my-5 pt-5  text-xl"
      />
    </div>
  );
};

export default index;
