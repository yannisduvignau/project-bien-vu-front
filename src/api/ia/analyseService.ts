import { post } from "../apiService";

export const postAnalyse = async (data:any) => {
  try {
    return await post("/api/ia/analyse",data);
  } catch (error) {
    console.error("Error in postAnalyse:", error);
    throw error;
  }
};