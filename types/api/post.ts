export type postListType = {
  contents: postType[],
  totalCount: Number;
  offset: Number;
  limit: Number;
};

export type postType = {
  id: string;
  title: string;
  body: string;
}
