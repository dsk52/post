import Link from "next/link";
import React from "react";
import { postType } from "../../types/api/post";

type postsProps = {
  posts: postType[]
}

const PostList = (posts: postsProps) => {
  return (
    <>
      <ul>
        {posts.posts.map((post: postType) => {
          return (
            <li key={post.id}>
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <span>{post.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export { PostList };
