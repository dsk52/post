import React from "react";
import Layout from "../../components/Layout";
import { PostList } from "../../components/posts/PostList";
import { PostInteractor } from "../../interactors/posts/PostInteractor";
import { postListType } from "../../types/api/post";

type postsProps = {
  posts: postListType
}

function ListPage(props: postsProps) {  
  return (
    <Layout title="投稿一覧">
      <h1>投稿一覧</h1>
      <div className="">total: {props.posts.totalCount}</div>

      {props.posts.contents && props.posts.contents.length ? <PostList posts={props.posts.contents} /> : <div>nothing content</div>}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await new PostInteractor().getAll();

  return {
    props: {
      posts
    },
  };
}

export default ListPage;
