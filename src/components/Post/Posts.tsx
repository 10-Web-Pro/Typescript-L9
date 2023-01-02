// import { useQuery } from "react-query";
// import { getPopularPosts } from "../../services";
import tw from "twin.macro";
import { Posts as PostsType } from "../../types/dataTypes";
import Post from "./Post";
import { getPosts } from "../../services";
import { useQuery } from "react-query";

const Posts = () => {
  const { data, isLoading, isError } = useQuery("posts", getPosts);
  console.log(data, isLoading, isError);

  const Container = tw.div`p-4 grid grid-cols-4 gap-4`;
  if (isLoading)
    return (
      <div tw="text-4xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Error
      </div>
    );
  return (
    <Container>
      {data?.map(({ ...post }, idx: number) => (
        <Post key={idx} {...post} />
      ))}
    </Container>
  );
};

export default Posts;
