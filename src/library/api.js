import { apiUrl } from "./constant";
import axios from "axios";
import { getToken } from "./helper";

// api calls
export const getMethod = async (url) => {
  const token = getToken() || "";
  try {
    axios
      .get(apiUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postMethod = async (url, data) => {
  const token = getToken() || "";
  try {
    axios
      .post(apiUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        data,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const putMethod = async (url) => {
  const token = getToken() || "";
  try {
    axios
      .put(apiUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteMethod = async (url, data) => {
  const token = getToken() || "";
  try {
    axios
      .delete(apiUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        data,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};