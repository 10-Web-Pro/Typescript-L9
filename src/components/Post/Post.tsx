import { Posts as PostType } from "../../types/dataTypes";
import tw from "twin.macro";

const Container = tw.div`shadow-xl  rounded w-full border-gray-200 border`;
const Thumbnail = tw.img`bg-cover`;
const Title = tw.h2`text-xl font-semibold text-github p-2`;
const Author = tw.span`text-gray-500 p-2 [display: block]`;
const Post = ({ image, time, url, title }: PostType) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Thumbnail src={image} />
      <Author>Created {time}</Author>
    </Container>
  );
};

export default Post;
