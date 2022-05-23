import productsReducers from "./productsReducers";
import categoryReducers from "./categoryReducers";


import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        productsReducers,
        categoryReducers
    }
);

export default reducers;