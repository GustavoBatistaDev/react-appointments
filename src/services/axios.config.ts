import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export default api;

export const apiDash = (jwt: string) => {
  return axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${jwt}`,
    },
  });
};
