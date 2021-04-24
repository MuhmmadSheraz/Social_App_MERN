import React from "react";
interface Props {
  name: string;
}
const index = ({ name }: Props) => {
  return (
    <button className="mt-5 bg-blue-400 w-28 h-12 outline-none rounded text-white text-lg">
      {name}
    </button>
  );
};

export default index;
