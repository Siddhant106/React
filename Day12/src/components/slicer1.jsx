import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     count: 0,
 // };

// Immer :-  tumhe return [...state, newItem] ya map/filter use karna padta tha.
// Redux mein rule hai: state ko directly change mat karo.
// Normally tumhe naya array/object banana padta hai (immutable style).
// Immer tumhe shortcut deta hai: tum direct change likh sakte ho aur wo automatically ek new immutable copy bana deta hai.

// Immer Working: original object --> new draft (duplicate object) create krta hai -->  Update marega

const reactSlicer = createSlice ({
    name: "slice1",
    initialState: {count: 0},
    reducers: {
        Increment: (state) => {state.count = state.count+1},
        // In old days:
        // Increment: (state) => {
            // return {...state, count: state.count+1};
        // }
        Decrement: (state) => {state.count = state.count-1},
        Reset: (state) => {state.count = 0},
        CustomIncreaser: (state, action) => {state.count += action.payload}
    }
});


export const {Increment, Decrement, Reset, CustomIncreaser} = reactSlicer.actions;
export { reactSlicer };
export default reactSlicer.reducer;