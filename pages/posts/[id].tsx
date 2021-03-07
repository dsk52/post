import * as React from 'react'
import { GetStaticPaths } from 'next'
import Layout from '../../layouts/Layout'
import { PostInteractor } from '../../interactors/posts/PostInteractor'
import { Post } from '../../types/domain/post'

type PostDetailProps = {
  post: Post
}

type Params = {
  params: {
    id: string
  }
}

const PostDetail: React.FC<PostDetailProps> = (props: PostDetailProps) => {
  return (
    <Layout title={props.post.title}>
      <main>
        <header>
          <h1>{props.post.title}</h1>
        </header>

        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: props.post.body }}
        />
      </main>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await new PostInteractor().getAll()

  const paths = await posts.contents.map((post) => ({
    params: { id: post.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: Params) => {
  const contentId = params.id
  if (!contentId) {
    return
  }
  const posts = await new PostInteractor().getById(contentId)

  return {
    props: {
      posts,
    },
  }
}

export default PostDetail
