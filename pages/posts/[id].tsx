import { postListType, postType } from "../../types/api/post";
import { GetStaticPaths } from 'next';
import React from "react";
import Layout from "../../components/Layout";
import { PostInteractor } from "../../interactors/posts/PostInteractor";

type PostDetailProps = {
  posts: postType
}

const PostDetail = (props: PostDetailProps) => {
  return (
    <Layout title="投稿一覧">
      <main>
        <header>
          <h1>{props.posts.title}</h1>
        </header>

        <div className="body" dangerouslySetInnerHTML={{ __html: props.posts.body }}  />
      </main>
      </Layout>
  )
};

/**
 * 静的吐き出しをするサイトのpathを準備
 */
export const getStaticPaths = async () => {
  const posts = await new PostInteractor().getAll();
  if (posts === null) {
    return;  // TODO ここの処理Next wayに乗る形で直したい
  }

  const paths = await posts.contents.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};


export async function getStaticProps({ params }) {
  const contentId = params?.id;
  const posts = await new PostInteractor().getById(contentId);

  return {
    props: {
      posts
    },
  };
}

export default PostDetail;
