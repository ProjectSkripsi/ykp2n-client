import axios from "axios";
import { baseUrl } from "../../constants/defaultValues";
import { getToken } from "../../helpers/Utils";

export const addSymptomsService = async (code, name, description) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${baseUrl}/symptoms`,
      { code, name, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    const err = error.response ? error.response : error;
    return Promise.reject(err);
  }
};

export const updateSymptomsService = async (id, code, name, description) => {
  const token = getToken();
  try {
    const response = await axios.put(
      `${baseUrl}/symptoms/${id}`,
      { code, name, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    const err = error.response ? error.response : error;
    return Promise.reject(err);
  }
};
