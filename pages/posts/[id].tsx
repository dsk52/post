import * as React from 'react'
import { GetStaticPaths } from 'next'
import { postType } from '../../types/api/post'
import Layout from '../../components/Layout'
import { PostInteractor } from '../../interactors/posts/PostInteractor'

type PostDetailProps = {
  posts: postType
}

type Params = {
  params: {
    id: string
  }
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
