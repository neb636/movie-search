import axios, { AxiosRequestConfig } from 'axios';

type ConfigObject = {
  baseUrl: string;
  timeout?: number;
};

export const createRestApiUtil = (config: ConfigObject) => {
  const { baseUrl, timeout } = config;

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: timeout || 1000,
  });

  return {
    get: async <T = unknown>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await axiosInstance.get(url, config);

      return response.data;
    },
    post: async <T = unknown>(
      url: string,
      data?: { [key: string]: any },
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await axiosInstance.post(url, data, config);

      return response.data;
    },
    put: async <T = unknown>(
      url: string,
      data?: { [key: string]: any },
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await axiosInstance.put(url, data, config);

      return response.data;
    },
    patch: async <T = unknown>(
      url: string,
      data?: { [key: string]: any },
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await axiosInstance.patch(url, data, config);

      return response.data;
    },
    delete: async <T = unknown>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<T> => {
      const response = await axiosInstance.delete(url, config);

      return response.data;
    },
  };
};
