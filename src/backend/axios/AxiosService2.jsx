import axios from "axios";

const api = axios.create({
  baseURL: "https://service2.stg.mn/api",
  // baseURL: "http://192.168.7.8:7110/api",
});

export const GetDataService = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response;
  } catch (error) {
    return error;
  }
};

export const PostDataService = async (endpoint, postData) => {
  try {
    const response = await api.post(endpoint, postData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const GetDataWithAuthorization = async (endpoint) => {
  try {
    const data = await api.get(endpoint, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Throw a custom error for unauthorized access
      throw new Error("Unauthorized");
    }
    return error;
  }
};
export const PostDataWithAuthorization = async (endpoint, postData) => {
  try {
    const data = await api.post(endpoint, postData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Throw a custom error for unauthorized access
      throw new Error("Unauthorized");
    }
    return error;
  }
};
