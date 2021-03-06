export const routes = {
  top: '/',
  post: '/posts/list',
  postDetail: (postId: string): string => `/posts/${postId}`,
}
