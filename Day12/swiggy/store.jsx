import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./slice2";


const stores = configureStore({
        reducer: {
            slice2: CardReducer
        }
});

export default stores;