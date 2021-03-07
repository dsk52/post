import { postBody, postListType } from '../../types/api/post'
import { Post } from '../../types/domain/post'
import { PostMapper } from './PostMappter'

class PostInteractor {
  private readonly BASE_URL = 'https://postdk.microcms.io/api/v1/post'
  private _MICROCMS_API_KEY: string

  constructor() {
    this._MICROCMS_API_KEY = process.env.MICROCMS_API_KEY
      ? process.env.MICROCMS_API_KEY
      : ''
  }

  getAll = async (): Promise<postListType> => {
    const response = await fetch(this.BASE_URL, {
      headers: {
        'X-API-KEY': this._MICROCMS_API_KEY,
      },
    })
    return await response.json()
  }

  getById = async (contentId?: string): Promise<Post | null> => {
    if (contentId === null) {
      return null
    }

    try {
      const response = await fetch(`${this.BASE_URL}/${contentId}`, {
        headers: {
          'X-API-KEY': this._MICROCMS_API_KEY,
        },
      })
      const body: postBody = await response.json()

      return PostMapper.mappingPostDetail(body)
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export { PostInteractor }
