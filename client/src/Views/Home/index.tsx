import { useQuery } from "@apollo/client";
import CreatePostBox from "../../Components/CreatePostBox";
import PostBox from "../../Components/PostBox";
import { FECH_POSTS_QUERY } from "./query";
import { postType } from "../../Types/type";
const Home = () => {
  const { loading, data } = useQuery(FECH_POSTS_QUERY);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="h-full  px-8 pt-5 pb-5 w-full">
      <CreatePostBox />
      <button className="bg-blue-500 px-5 py-3 block rounded text-white text-lg">
        Posta
      </button>
      {data?.getAllPosts?.map((post: postType, index: string) => {
        return <PostBox key={index} postData={post} />;
      })}
    </div>
  );
};

export default Home;
