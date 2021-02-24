export type postListType = {
  contents: postType[]
  totalCount: number
  offset: number
  limit: number
}

export type postType = {
  id: string
  title: string
  body: string
}
