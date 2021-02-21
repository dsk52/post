import { postListType, postType } from "../../types/api/post";
import { GetStaticPaths } from 'next';
import React from "react";
import Layout from "../../components/Layout";

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
export const getStaticPaths: GetStaticPaths = async () => {
  const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY ? process.env.MICROCMS_API_KEY : '';
  const response = await fetch("https://postdk.microcms.io/api/v1/post", {
    headers: {
      'X-API-KEY': MICROCMS_API_KEY
    }
  });
  const posts: postListType = await response.json();

  const paths = await posts.contents.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};


export async function getStaticProps({ params }) {
  const contentId = params?.id;

  const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY ? process.env.MICROCMS_API_KEY : '';
  const response = await fetch(`https://postdk.microcms.io/api/v1/post/${contentId}`, {
    headers: {
      'X-API-KEY': MICROCMS_API_KEY
    }
  });
  const posts: postType = await response.json();

  return {
    props: {
      posts
    },
  };
}

export default PostDetail;
