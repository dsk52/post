import Link from 'next/link'
import * as React from 'react'
import { routes } from '../../routes'
import { Post } from '../../types/domain/post'

import styles from './PostList.module.css'

type postsProps = {
  posts: Post[]
}

const PostList: React.FC<postsProps> = (posts: postsProps) => (
  <ul className={styles.postList}>
    {posts.posts.map((post: Post) => (
      <li className={styles.postListItem} key={post.id}>
        <Link href={routes.postDetail(post.id)}>
          <a>
            <span className={styles.postTitle}>{post.title}</span>
          </a>
        </Link>
        <time>{post.publishedAt}</time>
      </li>
    ))}
  </ul>
)

export { PostList }
