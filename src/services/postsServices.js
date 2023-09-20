import { getFetch, postFetch } from "../helpers/Fetch";

export const getPostServices = async (id,token) => {
  return await getFetch(`posts/user/${id}`, token);
};

export const postPostServices = async (data) => {
  return await postFetch("posts", data,token);
};
