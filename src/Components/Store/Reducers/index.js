import { combineReducers } from "redux";

import CountriesReducer from "./CountriesReducer"

const rootReducer = combineReducers({
    Countries : CountriesReducer,
})

export default rootReducer