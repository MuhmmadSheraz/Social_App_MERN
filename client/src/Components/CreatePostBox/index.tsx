import { useMutation } from "@apollo/client";
import { useState } from "react";
import "../../Css/global.css";
import { CREATE_POST_MUTATION } from "./mutation";
import { FECH_POSTS_QUERY } from "../../Views/Home/query";
const Index = () => {
  const [body, setBody] = useState("");
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    variables: { body },
    update(proxy, result) {
      let unMutatedData = proxy.readQuery<any>({
        query: FECH_POSTS_QUERY,
      });
      const data = { ...unMutatedData };
      data.getAllPosts = [result.data.createPost, ...data.getAllPosts];
      proxy.writeQuery({ query: FECH_POSTS_QUERY, data });
    },
  });
  const createNewPost = async () => {
    try {
      await createPost();
      setBody("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <textarea
        onChange={(e) => setBody(e.target.value)}
        placeholder="Whats Going On?"
        rows={5}
        value={body}
        className="border-gray-400 border  createPostBox md:w-2/3 w-full px-10 focus-within:no-underline py-5  shadow-md  rounded-lg outline-none text-lg  resize-none"
      />
      <button
        className="bg-blue-500 px-5 py-3 block rounded text-white text-lg"
        onClick={createNewPost}
      >
        Post
      </button>
    </>
  );
};

export default Index;
