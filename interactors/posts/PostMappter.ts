import { postBody } from '../../types/api/post'
import { Post } from '../../types/domain/post'

export class PostMapper {
  static mappingPostDetail = (responseBody: postBody): Post => ({
    id: responseBody.id,
    title: responseBody.title,
    body: responseBody.body,
    publishedAt: responseBody.publishedAt,
  })
}
