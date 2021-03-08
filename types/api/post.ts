import { ListResponse, ObjectResponse } from './commonResponse'
import { tagBody } from './tag'

export type postListBody = ListResponse<{
  contents: postBody[]
  totalCount: number
  offset: number
  limit: number
}>

export type postBody = ObjectResponse<{
  title: string
  body: string
  tags: tagBody[]
}>
