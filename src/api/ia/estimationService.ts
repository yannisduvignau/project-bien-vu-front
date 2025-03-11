import { post } from "../apiService";

export const postEstimation = async (data:any) => {
  try {
    return await post("/ia/estimation",data);
  } catch (error) {
    console.error("Error in postEstimation:", error);
    throw error;
  }
};