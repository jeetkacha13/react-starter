import { Axios } from "axios";

import { API_URL } from "@/config";

function authRequestInterceptor() {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
