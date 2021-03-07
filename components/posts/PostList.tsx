import Link from 'next/link'
import * as React from 'react'
import { routes } from '../../routes'
import { PostType } from '../../types/domain/post'

import styles from './PostList.module.css'

type postsProps = {
  posts: PostType[]
}

const PostList: React.FC<postsProps> = (posts: postsProps) => (
  <ul className={styles.postList}>
    {posts.posts.map((post: PostType) => (
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
