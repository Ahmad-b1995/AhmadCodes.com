import { log, logError } from "@/utils/logger";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const fetchData = async <T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.get<T>(url, options);
  return response.data;
};

export const axiosInstance = axios.create({
  headers: {
    "Content-type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    log(response.data);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
