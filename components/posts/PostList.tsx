import Link from 'next/link'
import * as React from 'react'
import { postType } from '../../types/api/post'
import { routes } from '../../routes'

import styles from './PostList.module.css'

type postsProps = {
  posts: postType[]
}

const PostList: React.FC<postsProps> = (posts: postsProps) => (
  <ul className={styles.postList}>
    {posts.posts.map((post: postType) => (
      <li className={styles.postListItem} key={post.id}>
        <Link href={routes.postDetail(post.id)}>
          <a>
            <span className={styles.postTitle}>{post.title}</span>
          </a>
        </Link>
      </li>
    ))}
  </ul>
)

export { PostList }
