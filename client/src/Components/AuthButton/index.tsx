import React from "react";
interface Props {
  name: string;
  click: () => void;
}
const index = ({ name, click }: Props) => {
  return (
    <button
      className="mt-5 bg-blue-400 w-28 h-12 outline-none focus:outline-none rounded text-white text-lg"
      onClick={() => click()}
    >
      {name}
    </button>
  );
};

export default index;
