import Link from 'next/link'
import * as React from 'react'
import { postType } from '../../types/api/post'
import { routes } from '../../routes'

type postsProps = {
  posts: postType[]
}

const PostList: React.FC<postsProps> = (posts: postsProps) => (
  <ul>
    {posts.posts.map((post: postType) => {
      return (
        <li key={post.id}>
          <Link href={routes.postDetail(post.id)}>
            <span>{post.title}</span>
          </Link>
        </li>
      )
    })}
  </ul>
)

export { PostList }
