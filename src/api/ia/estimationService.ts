import { post } from "../apiService";

export const postEstimationDescription = async (data:any) => {
  try {
    return await post("/ia/estimation/description",data);
  } catch (error) {
    console.error("Error in postEstimationDescription:", error);
    throw error;
  }
};

export const postEstimationURL = async (data:any) => {
  try {
    return await post("/ia/estimation/url",data);
  } catch (error) {
    console.error("Error in postEstimationURL:", error);
    throw error;
  }
};