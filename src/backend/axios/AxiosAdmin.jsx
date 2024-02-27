import axios from "axios";

const api = axios.create({
  baseURL: "https://admin.e-siticom.com/api",
});

const token =
  "fpKQ11ewAlWD7MDKg1RLlQzR22SwEJTBJl9pGRSsm4M0Lfd1YXCbJILqesFAVfpE";

export const GetData = async (endpoint) => {
  try {
    const data = await api.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const PostData = async (endpoint, postData) => {
  try {
    const response = await api.post(endpoint, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
