import { postFetch } from "../helpers/Fetch";

export const loginServices = async (data) => {
  return await postFetch('auth/login', data);
};

export const userRegisterServices = async (data) => {
  return await postFetch('users', data);
};
