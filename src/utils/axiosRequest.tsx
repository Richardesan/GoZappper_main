import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { redirect } from "react-router-dom";
import { AppRoutes } from "./route";

// Define an interface for your options
interface AxiosRequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS"; // Specify allowed methods
  url: string; // API URL
  data?: any; // Optional payload for POST/PUT/PATCH requests
  params?: any; // Optional query parameters
  errorMessage?: string; // Optional error message for Toast
  config?: AxiosRequestConfig; // Additional Axios request configurations
}
// Generic function for Axios requests
const AxiosRequest = async <T = any,>(
  options: AxiosRequestOptions
): Promise<T | undefined> => {
  const { method, url, data, params, config } = options;

  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url: `${import.meta.env.VITE_API_URL}${url}`,
      data,
      params,
      withCredentials: true,
      headers: {
        "ngrok-skip-browser-warning": true, // Ensure the content type is set correctly
        ...(config?.headers || {}), // Include any additional headers if provided
      },
      ...config, // Include any additional Axios configurations
    });

    return response.data; // Return the response data
  } catch (error: any) {
    if (error.response) {
      const statusCode = error.response.status;

      switch (statusCode) {
        case 401:
          axios
            .get(`${import.meta.env.VITE_API_URL}/authentication/token`, {
              headers: {
                "ngrok-skip-browser-warning": true,
                "Content-Type": "application/json", // You can add more headers as needed
              },
            })
            .then((_res) => {
              redirect(`${AppRoutes.onboarding}`);
            })
            .catch((err) => {
              console.log(err);
              redirect(`${AppRoutes.login}`);
            });
          break;
        default:
          console.log(statusCode);
      }
      const errorMsg = error.response.data.error;
      console.log(errorMsg);
    }

    console.error("Axios request error:", error.response);
    throw error;
  }
};

export default AxiosRequest;
