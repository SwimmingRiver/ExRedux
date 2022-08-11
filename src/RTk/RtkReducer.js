import {createSlice} from '@reduxjs/toolkit';
export let initialState = {
    value:0,
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        plus:(state)=>{state.value+=1 },
        minus:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0},
    }
})