import { post } from "../apiService";

export const postGeneration = async (data:any) => {
  try {
    return await post("/ia/generation",data);
  } catch (error) {
    console.error("Error in postGeneration:", error);
    throw error;
  }
};