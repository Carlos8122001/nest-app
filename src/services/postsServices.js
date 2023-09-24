import { deleteFetch, getFetch, patchFetch, postFetch } from "../helpers/Fetch";

export const getPostServices = async (id, token) => {
  return await getFetch(`posts/user/${id}`, token);
};

export const postPostServices = async (data, token) => {
  return await postFetch("posts", data, token);
};

export const patchPostServices = async (data, token, id) => {
  return await patchFetch(`posts/${id}`, data, token);
};

export const deletePostServices = async (id, token) => {
  return await deleteFetch(`posts/${id}`, token);
};
