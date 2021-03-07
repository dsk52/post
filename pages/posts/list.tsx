import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../layouts/Layout'
import { PostList } from '../../components/posts/PostList'
import { PostInteractor } from '../../interactors/posts/PostInteractor'
import { PostListType } from '../../types/domain/post'

type postsProps = {
  posts: PostListType
}

const ListPage: React.FC<postsProps> = (props: postsProps) => {
  return (
    <Layout title="投稿一覧">
      <h1>投稿一覧</h1>
      <div className="">total: {props.posts.totalCount}</div>

      {props.posts.contents && props.posts.contents.length ? (
        <PostList posts={props.posts.contents} />
      ) : (
        <div>nothing content</div>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await new PostInteractor().getAll()

  return {
    props: {
      posts,
    },
  }
}

export default ListPage
