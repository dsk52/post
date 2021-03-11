import { commonListResponse, commonObjectResponse } from './commonResponse'

export type postListBody = commonListResponse<postBody>

export type postBody = commonObjectResponse<{
  title: string
  body: string
}>
