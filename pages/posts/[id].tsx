import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { postType } from '../../types/api/post'
import Layout from '../../components/Layout'
import { PostInteractor } from '../../interactors/posts/PostInteractor'

type PostDetailProps = {
  posts: postType
}

const PostDetail: React.FC<PostDetailProps> = (props: PostDetailProps) => {
  return (
    <Layout title="投稿一覧">
      <main>
        <header>
          <h1>{props.posts.title}</h1>
        </header>

        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: props.posts.body }}
        />
      </main>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await new PostInteractor().getAll()
  if (posts === null) {
    return null // TODO ここの処理Next wayに乗る形で直したい
  }

  const paths = await posts.contents.map((post) => ({
    params: { id: post.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const contentId = params?.id
  const posts = await new PostInteractor().getById(contentId)

  return {
    props: {
      posts,
    },
  }
}

export default PostDetail
