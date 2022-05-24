import { configs } from "@/configs/configs";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: configs.apiUrl,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  async (config) => {
    const accessToken = (config as any).headers?.common?.Authorization;
    if (!accessToken) {
      delete (config as any).headers.common["Authorization"];
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export const setAxiosHeaderAuthorization = (bearerToken?: string): void => {
  if (bearerToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
