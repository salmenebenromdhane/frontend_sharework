import companiesService from "../../services/companiesService";
import companyService from "../../services/companyService";
import * as actionTypes from "./actionTypes";

/**
 * Fetch Companies Start
 */
export const fetchCompaniesStart = () => {
  return {
    type: actionTypes.FETCH_COMPANIES_START,
  };
};

/**
 * Fetch Companies Success
 */
export const fetchCompaniesSuccess = (companies, companyToHide, count) => {
  return {
    type: actionTypes.FETCH_COMPANIES_SUCCESS,
    payload: companies,
    companyToHide,
    count,
  };
};

/**
 * Fetch Companies Failed
 */
export const fetchCompaniesFailed = () => {
  return {
    type: actionTypes.FETCH_COMPANIES_FAILED,
  };
};

/**
 * Function to retrieve all campanies from API/JSON
 * @param {*} companyToHide 
 * @param {*} page 
 */
export function findAllCompanies(companyToHide = null, page = 1) {
  return async (dispatch) => {
    dispatch(fetchCompaniesStart());
    const response = await companiesService.getCompanies(page);
    if (response) {
      dispatch(
        fetchCompaniesSuccess(response.data, companyToHide, response.count)
      );
    } else {
      dispatch(fetchCompaniesFailed());
    }
  };
}

// Company Details Actions
export const fetchCompanyByIdStart = () => {
  return {
    type: actionTypes.FETCH_COMPANY_START,
  };
};

export const fetchCompanyByIdSuccess = (company) => {
  return {
    type: actionTypes.FETCH_COMPANY_SUCCESS,
    payload: company,
  };
};

export const fetchCompanyByIdFailed = () => {
  return {
    type: actionTypes.FETCH_COMPANY_FAILED,
  };
};

export function findCompanyById(id) {
  return async (dispatch) => {
    dispatch(fetchCompanyByIdStart());
    const response = await companyService.getCompanyById(id);
    if (response) {
      dispatch(fetchCompanyByIdSuccess(response.data));
    } else {
      dispatch(fetchCompanyByIdFailed());
    }
  };
}