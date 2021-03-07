export type postListType = {
  contents: postBody[]
  totalCount: number
  offset: number
  limit: number
}

export type postBody = {
  id: string
  title: string
  body: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
