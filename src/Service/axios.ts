import axios from "axios";
import { baseURL } from "./config";
import { read } from "./storage";
import { logout, setToken } from "Redux/Auth/slice";
const token = read("access");
const client = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

client.interceptors.request.use(async (config) => {
  const access = read("access") || null;
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = read("refresh") || null;
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const store = require("Redux/store").default; // Use require inside the function
      if (
        !refreshToken ||
        refreshToken === "null" ||
        refreshToken === "undefined"
      ) {
        store.dispatch(logout());
      } else {
        try {
          const response = await client.post("token/refresh/", {
            refresh: refreshToken,
          });
          const newAccessToken = response.data.access;

          store.dispatch(
            setToken({
              access: newAccessToken,
            })
          );

          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return client(originalRequest);
        } catch (refreshError) {
          store.dispatch(logout());
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export { client };
