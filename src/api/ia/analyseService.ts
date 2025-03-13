import { post } from "../apiService";

export const postAnalyseDescription = async (data:any) => {
  try {
    return await post("/ia/analyse/description",data);
  } catch (error) {
    console.error("Error in postAnalyseDescription:", error);
    throw error;
  }
};

export const postAnalyseURL = async (data:any) => {
  try {
    return await post("/ia/analyse/url",data);
  } catch (error) {
    console.error("Error in postAnalyseURL:", error);
    throw error;
  }
};