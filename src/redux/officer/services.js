import axios from "axios";
import { baseUrl } from "../../constants/defaultValues";
import { getToken } from "../../helpers/Utils";

export const deleteOfficerService = async (_id) => {
  const token = getToken();
  try {
    const response = await axios.delete(`${baseUrl}/user/officer/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    const err = error.response ? error.response : error;
    return Promise.reject(err);
  }
};

export const addOfficerService = async (
  name,
  officerId,
  email,
  password,
  address
) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${baseUrl}/user/register-officer`,
      { name, officerId, email, password, address },
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

export const updateOfficerService = async (
  _id,
  name,
  officerId,
  email,
  address
) => {
  const token = getToken();
  try {
    const response = await axios.put(
      `${baseUrl}/user/officer/${_id}`,
      { _id, name, officerId, email, address },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    const err = error.response ? error.response : error;
    return Promise.reject(err);
  }
};
