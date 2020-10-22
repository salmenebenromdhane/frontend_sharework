const initialState = {
    companiesList: [],
    companiesCount: 0,
    companyDetails: {},
  };
  
  export function companies(state = initialState, action) {
    switch (action.type) {
      case "FETCH_COMPANIES_SUCCESS":
        let companiesData;
        // If we are fetching companies after hide one
        if (action.companyToHide) {
          if (state.companiesList.length <= 0) {
            // We filter companies from the initial response of the API
            companiesData = action.payload.filter(
              (el) => el.id !== action.companyToHide
            );
          } else {
            // We filter companies from the current state
            companiesData = state.companiesList.filter(
              (el) => el.id !== action.companyToHide
            );
          }
        // If we fetch all companies
        } else {
          companiesData = action.payload;
        }
        return {
          ...state,
          companiesList: companiesData,
          companyDetails: state.companyDetails,
          companiesCount: action.count,
        };
      case "FETCH_COMPANY_SUCCESS":
        return {
          ...state,
          companyDetails: action.payload,
          companiesList: state.companiesList,
        };
      default:
        return state;
    }
  }
  