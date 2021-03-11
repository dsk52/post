export type commonListResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
} & T

export type commonObjectResponse<T> = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
} & T
