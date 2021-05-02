export type postType = {
  body: string;
  comments: [commentType];
  id: string;
  likes: [likeType];
  likesCount: any;
  createdAt: string;
  username: string;
  commentsCount: number;
};
export type commentType = {
  body: string;
  id: string;
  username: string;
};
export type likeType = {
  createdAt: string;
  username: string;
};
