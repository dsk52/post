import React from "react";
import { PostList } from "../../components/posts/PostList";
import { postListType } from "../../types/api/post";

type postsProps = {
  posts: postListType
}

function ListPage(props: postsProps) {  
  return (
    <div>
      
      <div className="">total: {props.posts.totalCount}</div>

      {props.posts.contents && props.posts.contents.length ? <PostList posts={props.posts.contents} /> : <div>nothing content</div>}
    </div>
  )
}

export async function getStaticProps() {
  const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY ? process.env.MICROCMS_API_KEY : '';
  const response = await fetch("https://postdk.microcms.io/api/v1/post", {
    headers: {
      'X-API-KEY': MICROCMS_API_KEY
    }
  });
  const posts: postListType = await response.json();

  return {
    props: {
      posts
    },
  };
}

export default ListPage;
