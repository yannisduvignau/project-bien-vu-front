import { post } from "../apiService";

export const postGeneration = async (data:any) => {
  try {
    return await post("/api/ia/analyse",data);
  } catch (error) {
    console.error("Error in postGeneration:", error);
    throw error;
  }
};