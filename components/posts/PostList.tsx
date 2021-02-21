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
              <span>{post.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export { PostList };
