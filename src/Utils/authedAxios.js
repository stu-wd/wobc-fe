import axios from "axios";

const authedAxios = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:4000/api",
  });
};

export const attachments = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};

export default authedAxios;
