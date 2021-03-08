export type ListResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

export type ObjectResponse<T> = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
} & T
