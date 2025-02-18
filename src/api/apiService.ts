import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fonction GET générique
export const get = async (endpoint:string, params = {}) => {
  const response = await apiClient.get(endpoint, { params });
  return response.data;
};

// Fonction POST générique
export const post = async (endpoint:string, data:any, isFormData:boolean = false) => {
    const response = await apiClient.post(endpoint, data, {
        headers: isFormData
          ? { "Content-Type": "multipart/form-data" } // Spécifie le type multipart pour FormData
          : { "Content-Type": "application/json" },
      });
    return response.data;
};
