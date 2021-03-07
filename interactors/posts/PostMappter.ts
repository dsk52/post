import { postBody, postListBody } from '../../types/api/post'
import { PostType, PostListType } from '../../types/domain/post'

export class PostMapper {
  static mappingPostList = (responseBody: postListBody): PostListType => {
    const posts: PostType[] = responseBody.contents.map((content: PostType) => {
      return {
        id: content.id,
        title: content.title,
        body: content.body,
        publishedAt: content.publishedAt,
      }
    })

    return {
      contents: posts,
      totalCount: responseBody.totalCount,
    }
  }

  static mappingPostDetail = (responseBody: postBody): PostType => ({
    id: responseBody.id,
    title: responseBody.title,
    body: responseBody.body,
    publishedAt: responseBody.publishedAt,
  })
}
