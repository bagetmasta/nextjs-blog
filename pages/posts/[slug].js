import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
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
