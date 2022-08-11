import { configureStore } from "@reduxjs/toolkit";
import { counterSlice,initialState } from "./RtkReducer";

export const store = configureStore({
    initialState:initialState,
    reducer:counterSlice.reducer,
})