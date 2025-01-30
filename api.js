import axios from "axios";

export const getProductCategory = async () => {
  try {
    const response = await axios.get("/courseDetails.json");
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching product category:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
