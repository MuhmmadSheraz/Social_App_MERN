import React from "react";

interface Props {
  type: string;
  data: string;
  setData: (a: string) => void;
  placeHolder: string;
}
const index = ({ type, placeHolder, data, setData }: Props) => {
  return (
    <div>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        type={type}
        placeholder={placeHolder}
        className=" border-b-2 outline-none  w-3/4 my-5 pt-5  text-xl"
      />
    </div>
  );
};

export default index;
