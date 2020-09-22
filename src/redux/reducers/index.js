import { combineReducers } from 'redux';
import countryReduces from './countryReducer';

export default combineReducers({
    countries: countryReduces,
})
