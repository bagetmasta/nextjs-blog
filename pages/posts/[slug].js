import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  return {
    paths: postFilenames.map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, "") },
    })),
    fallback: false,
  };
}

export default PostDetailPage;
