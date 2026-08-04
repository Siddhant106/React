import { configureStore } from "@reduxjs/toolkit";
import slicerReducer from "./slice1";


const stores = configureStore({
    reducer: {
        slice1: slicerReducer,
    }
})

export default stores;