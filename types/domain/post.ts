export type PostListType = {
  contents: PostType[]
  totalCount: number
}

export type PostType = {
  id: string
  title: string
  body: string
  publishedAt: string
}
