import { post } from "../apiService";

export const postAnalyse = async (data:any) => {
  try {
    return await post("/ia/analyse",data);
  } catch (error) {
    console.error("Error in postAnalyse:", error);
    throw error;
  }
};