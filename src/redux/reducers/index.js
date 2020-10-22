import { combineReducers } from 'redux';
import { companies } from './companies.reducer';

const rootReducer = combineReducers({
    companies,
});

export default rootReducer;