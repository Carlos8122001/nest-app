import { postFetch } from "../helpers/Fetch";

const API_LOGIN = `https://nest-api-posts.onrender.com/api/v1`;

export const loginServices = async (data) => {
  return await postFetch(`${API_LOGIN}/auth/login`, data);
};
