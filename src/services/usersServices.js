import { postFetch } from "../helpers/Fetch";

export const loginServices = async (data) => {
  return await postFetch('auth/login', data);
};
