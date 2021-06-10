import axios from "axios";
import React, { useState, useEffect } from "react";
import { Post } from "../types/index";
import Context from "./context";

export default function GlobalState(props: any) {
  const [state, setState] = useState({ posts: [] as Post[] | any });
  const [isLoading, setLoading] = useState(true);
  const [editPost, setEditPost] = useState({} as Post);
  const URL = "https://app-react-express-mongo.herokuapp.com/api/posts";

  useEffect(() => {
    fechPost();
  }, []);

  const fechPost = () => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((items) => setState({ ...state, posts: items }))
      .then(() => setLoading(false))
      .catch((error) => console.log(error.message));
  };

  const addNewPost = async (request: Post) => {
    setLoading(true);
    await axios
      .post(URL, request)
      .then(() => fechPost())
      .catch((error) => console.log(error));
  };

  const updatePost = async (request: Post) => {
    setLoading(true);
    await axios
    .put(URL + "/" + request._id, request)
    .then(() => fechPost())
    .catch((error) => console.log(error));
  };

  const deletePost = async (postId: string) => {
    setLoading(true);
    await axios
      .delete(URL + "/" + postId)
      .then(() => fechPost())
      .catch((error) => console.log(error));
  };

  return (
    <Context.Provider
      value={{
        state: state,
        isLoading: isLoading,
        setLoading: () => setLoading,
        addNewPost: addNewPost,
        updatePost: updatePost,
        deletePost: deletePost,
        editPost: editPost,
        setEditPost: setEditPost,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
