import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fonction GET générique
export const get = async <T>(endpoint: string, params = {}): Promise<T> => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`Erreur GET ${endpoint}:`, error);
    throw error;
  }
};

// Fonction POST générique
export const post = async <T>(
  endpoint: string,
  data: Record<string, unknown> | FormData,
  isFormData: boolean = false
): Promise<T> => {
  try {
    const response = await apiClient.post(endpoint, data, {
      headers: isFormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error(`Erreur POST ${endpoint}:`, error);
    throw error;
  }
};
