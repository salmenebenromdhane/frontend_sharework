import axios from "axios";
import apiUrl from "./apiUrl";

const getCompanies = async (page = 1) => {
  return axios
    .get(apiUrl + "/companies-" + page + ".json")
    .then((response) => {
      return {
        data: response.data.results,
        count: response.data.count,
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

export default { getCompanies };