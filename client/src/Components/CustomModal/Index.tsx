import { useMutation } from "@apollo/client";
import React from "react";
import Modal from "react-modal";
import { postType } from "../../Types/type";
import { FECH_POSTS_QUERY } from "../../Views/Home/query";
import { DELETE_POST } from "../PostBox/mutation";
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    bottom: "auto",
    transform: "translate(-50%, -40%)",
    borderRadius: "10px",
    width: "50%",
  },
};
interface Props {
  openModal: boolean;
  setOpenModal: (openModal: any) => void;
  id: string;
}
const CustomModal = ({ openModal, setOpenModal, id }: Props) => {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: { id },
    update(proxy) {
      let unMutatedData = proxy.readQuery<any>({
        query: FECH_POSTS_QUERY,
      });
      const data = { ...unMutatedData };
      data.getAllPosts = data.getAllPosts.filter(
        (post: postType) => post.id !== id
      );
      proxy.writeQuery({ query: FECH_POSTS_QUERY, data });
    },
  });
  const postDelete = async () => {
    try {
      await deletePost();
      setOpenModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={setOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="text-lg mb-10">Are You Sure ?</h1>
        <div className="flex justify-end">
          <button
            className="mx-5 bg-red-600 text-white px-4 rounded py-2"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button
            className="mx-5 bg-green-600 text-white px-4 rounded py-2"
            onClick={() => postDelete()}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
