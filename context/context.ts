import React from "react";
import { Post } from "../types/index";

export default React.createContext({
  state: {posts: []},
  isLoading: true,
  setLoading: (isLoading: boolean) => {},
  addNewPost: (post: Post) => {},
  updatePost: (post: Post) => {},
  deletePost: (postId: string) => {},
  editPost: {} as Post,
  setEditPost: (post: Post) => {},
});
