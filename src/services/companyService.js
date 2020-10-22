import axios from "axios";
import apiUrl from "./apiUrl";

const getCompanyById = async (id) => {
  return axios
    .get(apiUrl + "/companies/" + id + ".json")
    .then((response) => {
      return {
        data: response.data,
      };
    })
    .catch((error) => {
      if (error.response) {
        return {
          status: error.response,
        };
      }
    });
};

export default { getCompanyById };