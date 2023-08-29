import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRFToken": Cookies.get("csrftoken"),
    "Cache-Control": "no-cache",
    Accept: "application/json",
  },
  baseURL: "api",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const code = error && error.response ? error.response.status : 0;
    if (code === 500) {
      message.error(
        "A server error occurred! Please refresh or try again later"
      );
    }
    if (code === 403) {
      message.error("You do not have permissions to access this screen!");
    }
    return Promise.reject(error);
  }
);

export const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
};
